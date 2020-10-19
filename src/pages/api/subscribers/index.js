import {
  getSubscribers,
  addSubscriber,
} from "../../../../server/mongodb/actions/Subscribers";

import { verifyToken } from "../../../../server/mongodb/actions/User";

const handler = (req, res) => {
  if (req.method === "GET") {
    const token = req.cookies.token;

    return verifyToken(token)
      .then(() => getSubscribers())
      .then((payload) => res.status(200).json({ success: true, payload }))
      .catch((error) =>
        res.status(400).json({ success: false, message: error.message })
      );
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
