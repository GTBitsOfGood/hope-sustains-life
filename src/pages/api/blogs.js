import { createBlog } from "../../../server/mongodb/actions/Blog";

// @route   GET POST DELETE api/blogs
// @desc    Blog Creation, Retrieval, or Deletion
// @access  Admin
const handler = async (req, res) => {
  if (req.method === "GET") {
    /* Get the blogs using the server action */
  } else if (req.method === "POST") {
    return createBlog(req.body)
      .then((payload) => res.status(200).json({ success: true, payload }))
      .catch((error) =>
        res.status(400).json({ success: false, message: error.message })
      );
  }
};

export default handler;
