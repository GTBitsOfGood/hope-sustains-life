import { sendContactEmail } from "../../../../server/actions/email";

const handler = (req, res) => {
  const { email, name, message } = req.body;

  return sendContactEmail(email, name, message)
    .then(() => res.status(200).json({ success: true }))
    .catch((error) =>
      res.status(400).json({ success: false, message: error.message })
    );
};

export default handler;
