import {
  getBlogById,
  deleteBlogById,
  updateBlog,
  setPublished,
} from "../../../../server/mongodb/actions/Blog";

import {
  verifyToken,
  getUserFromToken,
} from "../../../../server/mongodb/actions/User";

const handler = (req, res) => {
  const action = req.query.action;
  const blogId = req.query.id;

  if (req.method === "GET") {
    return getBlogById(blogId)
      .then((payload) => res.status(200).json({ success: true, payload }))
      .catch((error) =>
        res.status(400).json({ success: false, message: error.message })
      );
  } else if (req.method === "PATCH") {
    if (action === "PUBLISH") {
      const isPublished = req.body.isPublished;
      const token = req.cookies.token;

      return verifyToken(token)
        .then(() => setPublished(blogId, isPublished))
        .then(() => res.status(200).json({ success: true }))
        .catch((error) =>
          res.status(400).json({ success: false, message: error.message })
        );
    }

    const token = req.cookies.token;
    const {
      title,
      subtitle,
      body,
      references,
      isPublished,
      image,
      deleteOriginalImage,
    } = req.body;

    return getUserFromToken(token)
      .then((user) =>
        updateBlog(
          user.email,
          title,
          subtitle,
          body,
          references,
          isPublished,
          image,
          blogId,
          deleteOriginalImage
        )
      )
      .then(() => res.status(200).json({ success: true }))
      .catch((error) =>
        res.status(400).json({ success: false, message: error.message })
      );
  } else if (req.method === "DELETE") {
    const token = req.cookies.token;

    return verifyToken(token)
      .then(() => deleteBlogById(blogId))
      .then(() => res.status(200).json({ success: true }))
      .catch((error) =>
        res.status(400).json({ success: false, message: error.message })
      );
  }
};

export default handler;
