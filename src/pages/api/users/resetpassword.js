import { verifyToken } from "../../../../server/mongodb/actions/User";
import { resetUser } from "../../../../server/mongodb/actions/ResetUser";
import { createCookie, removeCookie } from "../../../../utils/tokens";

const handler = (req, res) => {
  if (req.method === "POST") {
    const { token, password } = req.body;

    return verifyToken(token)
      .then(({ id }) => resetUser(id, password))
      .then((token) => {
        res.setHeader("Set-Cookie", removeCookie());
        res.setHeader("Set-Cookie", createCookie(token, 604800));

        return res.status(200).json({ success: true });
      })
      .catch((error) =>
        res.status(400).json({ success: false, payload: error.message })
      );
  }
};

export default handler;
