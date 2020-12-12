import {
  login,
  getUserFromToken,
  updateUser,
} from "../../../../server/mongodb/actions/User";
import { createCookie, removeCookie } from "../../../../utils/tokens";

const handler = (req, res) => {
  const action = req.query.action;

  if (req.method === "GET") {
    return getUserFromToken(req.cookies?.token)
      .then((user) =>
        res.status(200).json({
          success: true,
          payload: user,
        })
      )
      .catch((error) => {
        res.setHeader("Set-Cookie", removeCookie());

        return res.status(400).json({
          success: false,
          message: error.message,
        });
      });
  } else if (req.method === "POST") {
    if (action === "LOGIN") {
      return login(req.body)
        .then((token) => {
          res.setHeader("Set-Cookie", createCookie(token, 604800));

          return res.status(200).json({
            success: true,
            payload: token,
          });
        })
        .catch((error) =>
          res.status(400).json({
            success: false,
            message: error.message,
          })
        );
    } else if (action === "LOGOUT") {
      res.setHeader("Set-Cookie", removeCookie());

      return res.status(200).json({
        success: true,
      });
    }
  } else if (req.method === "PATCH") {
    const { email, password } = req.body;
    const token = req.cookies.token;

    return updateUser(email, password, token)
      .then((token) => {
        res.setHeader("Set-Cookie", removeCookie());
        res.setHeader("Set-Cookie", createCookie(token, 604800));

        return res.status(200).json({ success: true, payload: token });
      })
      .catch((error) =>
        res.status(400).json({ success: false, payload: error.message })
      );
  }
};

export default handler;
