import { resetUser } from "../../../../server/mongodb/actions/ResetUser";

const handler = (req, res) => {
  if (req.method === "POST") {
    const { token, password } = req.body;

    return resetUser(token, password)
      .then(() => {
        res.status(200).json({ success: true });
      })
      .catch((error) =>
        res.status(400).json({ success: false, payload: error.message })
      );
  } else {
    res.status(405).json({ success: false, payload: "405 Method Not Allowed" });
  }
};

export default handler;
