import { addSubscriber } from "../../../server/mongodb/actions/Subscribers";

const handler = (req, res) => {
  if (req.method === "GET") {
    /* Get the subscribers here */
  } else if (req.method === "POST") {
    const email = req.body.email;

    return addSubscriber(email)
      .then(() => res.status(200).json({ success: true }))
      .catch((error) =>
        res.status(400).json({ success: false, message: error.message })
      );
  }
};

export default handler;
