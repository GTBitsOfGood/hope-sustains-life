import {
  getBlogs,
  createBlog,
  reorderBlogs,
} from "../../../../server/mongodb/actions/Blog";
import { getUserFromToken } from "../../../../server/mongodb/actions/User";

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
    const body = req.body.body;

    return getUserFromToken(req.cookies.token)
      .then((user) => createBlog(user.email, title, body))
      .then((payload) => res.status(200).json({ success: true, payload }))
      .catch((error) =>
        res.status(400).json({ success: false, message: error.message })
      );
  } else if (req.method === "PUT") {
    return reorderBlogs(req.body.blogs)
      .then(() => res.status(200).json({ success: true }))
      .catch((error) =>
        res.status(400).json({ success: false, message: error.message })
      );
  }
};

export default handler;
