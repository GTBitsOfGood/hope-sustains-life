import { getBlogs, createBlog } from "../../../../server/mongodb/actions/Blog";
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
    const subtitle = req.body.subtitle;
    const body = req.body.body;
    const references = req.body.references;
    const isPublished = req.body.isPublished;

    return getUserFromToken(req.cookies.token)
      .then((user) =>
        createBlog(user.email, title, subtitle, body, references, isPublished)
      )
      .then((payload) => res.status(200).json({ success: true, payload }))
      .catch((error) =>
        res.status(400).json({ success: false, message: error.message })
      );
  }
};

export default handler;
