import { verifyPayment } from "../../../../server/actions/stripe.js";

const handler = (req, res) => {
  if (req.method === "POST") {
    return verifyPayment(req.body)
      .then((payload) => res.status(200).json({ success: true, payload }))
      .catch((error) =>
        res.status(400).json({ success: false, message: error.message })
      );
  }
};

export default handler;
