import { forgotPassword } from "../../../../server/mongodb/actions/ForgotPassword";

const handler = (req, res) => {
  if (req.method === "POST") {
    const { email } = req.body;

    return forgotPassword(email)
      .then(() => {
        res.status(200).json({ success: true });
      })
      .catch((error) =>
        res.status(500).json({ success: false, payload: error.message })
      );
  }
};

export default handler;