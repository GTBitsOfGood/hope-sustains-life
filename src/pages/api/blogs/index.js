import {
  getBlogs,
  createBlog,
  reorderBlogs,
} from "../../../../server/mongodb/actions/Blog";

import {
  verifyToken,
  getUserFromToken,
} from "../../../../server/mongodb/actions/User";

// @route   GET POST DELETE api/blogs
// @desc    Blog Creation, Retrieval, or Deletion
// @access  Admin
const handler = (req, res) => {
  if (req.method === "GET") {
    const isPublishedOnly = req.query.isPublished === "true";

    return getBlogs(isPublishedOnly)
      .then((payload) => res.status(200).json({ success: true, payload }))
      .catch((error) =>
        res.status(400).json({ success: false, message: error.message })
      );
  } else if (req.method === "POST") {
    const { title, subtitle, body, references, isPublished, image } = req.body;

    return getUserFromToken(req.cookies.token)
      .then((user) =>
        createBlog(
          user.email,
          title,
          subtitle,
          body,
          references,
          isPublished,
          image
        )
      )
      .then((payload) => res.status(200).json({ success: true, payload }))
      .catch((error) =>
        res.status(400).json({ success: false, message: error.message })
      );
  } else if (req.method === "PUT") {
    if (req.body.action === "REORDER_BLOGS") {
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
