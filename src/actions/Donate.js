import urls from "../../utils/urls";
import getStripe from "../../utils/get-stripe";
import appRequest from "../../utils/requests";

export const verifyPayment = async (name, email, amount) => {
  return await appRequest({
    url: urls.baseUrl + urls.api.donations,
    method: "POST",
    body: {
      name,
      email,
      amount,
    },
    isSecure: false,
  });
};

export const finishPayment = async (
  intentSecret,
  card,
  cardHolderName,
  email
) => {
  const stripe = await getStripe();

  const response = await stripe.confirmCardPayment(intentSecret, {
    payment_method: {
      card: card,
      billing_details: { name: cardHolderName },
    },
    receipt_email: email,
  });

  if (response.error) {
    throw response.error;
  } else {
    return response;
  }
};
