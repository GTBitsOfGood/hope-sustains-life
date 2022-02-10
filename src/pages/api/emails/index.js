import { sendEmail } from "../../../../server/actions/email";

const handler = (req, res) => {
  const action = req.query.action;

  if (req.method === "POST") {
    if (action === "CONTACT") {
      const { email, subject, message } = req.body;

      return sendEmail(email, subject, message)
        .then(() => res.status(200).json({ success: true }))
        .catch((error) =>
          res.status(400).json({ success: false, message: error.message })
        );
    }
  }
};

export default handler;
