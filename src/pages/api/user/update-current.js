import { updateUser } from "../../../../server/mongodb/actions/User";
import { createCookie, removeCookie } from "../../../../utils/tokens";

const handler = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const token = req.cookies.token;

  updateUser(email, password, token)
    .then((token) => {
      res.setHeader("Set-Cookie", removeCookie());
      res.setHeader("Set-Cookie", createCookie(token, 604800));

      return res.status(200).json({ success: true, payload: token });
    })
    .catch((error) =>
      res.status(400).json({ success: false, payload: error.message })
    );
};

export default handler;
