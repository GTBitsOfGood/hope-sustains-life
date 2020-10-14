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
    return getBlogs()
      .then((payload) => res.status(200).json({ success: true, payload }))
      .catch((error) =>
        res.status(400).json({ success: false, message: error.message })
      );
  } else if (req.method === "POST") {
    const title = req.body.title;
    const subtitle = req.body.subtitle;
    const body = req.body.body;
    const references = req.body.references;
    const isPublished = req.body.isPublished;

    return getUserFromToken(req.cookies.token)
<<<<<<< HEAD
      .then((user) => createBlog(user.email, title, body))
      .then(() => res.status(200).json({ success: true }))
=======
      .then((user) =>
        createBlog(user.email, title, subtitle, body, references, isPublished)
      )
      .then((payload) => res.status(200).json({ success: true, payload }))
>>>>>>> f014843699a41adfe4906d8f29d58198cc62650e
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
