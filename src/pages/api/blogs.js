import { createBlog } from "../../../server/mongodb/actions/Blog";

// @route   GET POST DELETE api/blogs
// @desc    Blog Creation, Retrieval, or Deletion
// @access  Admin
const handler = (req, res) => {
  if (req.method === "GET") {
    /* Get the blogs using the server action */
  } else if (req.method === "POST") {
    createBlog(req.body)
      .then(() => res.status(200).json({ success: true }))
      .catch((error) =>
        res.status(400).json({ success: false, message: error.message })
      );
  }
};

export default handler;
