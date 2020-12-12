import {
  getBlogs,
  createBlog,
  reorderBlogs,
} from "../../../../server/mongodb/actions/Blog";

import { verifyToken } from "../../../../server/mongodb/actions/User";

const handler = (req, res) => {
  const action = req.query.action;

  if (req.method === "GET") {
    const onlyPublished = req.query.isPublished === "true";

    return getBlogs(onlyPublished)
      .then((payload) => res.status(200).json({ success: true, payload }))
      .catch((error) =>
        res.status(400).json({ success: false, message: error.message })
      );
  } else if (req.method === "POST") {
    const { title, subtitle, body, references, isPublished, image } = req.body;
    const token = req.cookies.token;

    return verifyToken(token)
      .then(({ email }) =>
        createBlog(email, title, subtitle, body, references, isPublished, image)
      )
      .then((payload) => res.status(200).json({ success: true, payload }))
      .catch((error) =>
        res.status(400).json({ success: false, message: error.message })
      );
  } else if (req.method === "PUT") {
    if (action === "REORDER") {
      const token = req.cookies.token;

      return verifyToken(token)
        .then(() => reorderBlogs(req.body.blogs))
        .then(() => res.status(200).json({ success: true }))
        .catch((error) =>
          res.status(400).json({ success: false, message: error.message })
        );
    }
  }
};

export default handler;
