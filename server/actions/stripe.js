import mongoDB from "../mongodb/index";
import Payment from "../mongodb/models/Payment";

const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export async function verifyPayment({ name, email, amount }) {
  if (typeof name != "string") {
    throw new Error("Name must be a string");
  } else if (!emailRegEx.test(email)) {
    throw new Error("Email must be valid");
  } else if (typeof amount != "number") {
    throw new Error("Amount must be a number");
  }

  if (amount <= 0) {
    throw new Error("Amount must be greater than 0");
  }

  await mongoDB();

  try {
    const stripe = require("stripe")(process.env.STRIPE_SECRET);
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Multiplied by 100 to convert to cents
      currency: "usd",
      receipt_email: email,
    });

    await Payment.create({
      name: name,
      email: email,
      amount: amount,
      intentID: paymentIntent.client_secret,
    });

    return {
      name: name,
      amount: amount,
      intentSecret: paymentIntent.client_secret,
    };
  } catch (error) {
    throw new Error("Failed to authorize payment");
  }
}
