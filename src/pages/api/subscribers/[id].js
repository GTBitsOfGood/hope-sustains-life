import { deleteSubscriber } from "../../../../server/mongodb/actions/Subscribers";
import { verifyToken } from "../../../../server/mongodb/actions/User";

const handler = (req, res) => {
  const subId = req.query.id;

  if (req.method === "DELETE") {
    const token = req.cookies.token;

    return verifyToken(token)
      .then(() => deleteSubscriber(subId))
      .then(() => res.status(200).json({ success: true }))
      .catch((error) =>
        res.status(400).json({ success: false, message: error.message })
      );
  }
};

export default handler;
