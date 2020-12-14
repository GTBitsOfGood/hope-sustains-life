import mongoDB from "../index";
import Subscriber from "../models/Subscriber";

export async function getSubscribers() {
  await mongoDB();

  try {
    return await Subscriber.find({});
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function addSubscriber(email) {
  if (email == null) {
    throw new Error("Email must be provided!");
  }

  await mongoDB();

  try {
    return await Subscriber.create({ email: email });
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function deleteSubscriber(id) {
  if (!id) {
    throw new Error("ID for subscriber must be provided");
  }

  await mongoDB();

  try {
    return await Subscriber.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error.message);
  }
}
