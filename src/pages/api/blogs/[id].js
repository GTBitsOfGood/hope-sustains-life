import {
  getBlogById,
  deleteBlogById,
  updateBlog,
} from "../../../../server/mongodb/actions/Blog";

import {
  verifyToken,
  getUserFromToken,
} from "../../../../server/mongodb/actions/User";

// @route   GET POST DELETE api/blogs/:id
// @desc    Blog Retrieval, Update, or Deletion
// @access  Admin
const handler = (req, res) => {
  if (req.method === "GET") {
    return getBlogById(req.query.id)
      .then((payload) => res.status(200).json({ success: true, payload }))
      .catch((error) =>
        res.status(400).json({ success: false, message: error.message })
      );
  } else if (req.method === "DELETE") {
    const token = req.cookies.token;

    return verifyToken(token)
      .then(() => deleteBlogById(req.query.id))
      .then(() => res.status(200).json({ success: true }))
      .catch((error) =>
        res.status(400).json({ success: false, message: error.message })
      );
  } else if (req.method === "PUT") {
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
          req.query.id,
          deleteOriginalImage
        )
      )
      .then(() => res.status(200).json({ success: true }))
      .catch((error) =>
        res.status(400).json({ success: false, message: error.message })
      );
  }
};

export default handler;
