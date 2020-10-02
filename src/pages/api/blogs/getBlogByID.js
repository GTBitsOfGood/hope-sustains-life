
import { getBlog } from "../../../../server/mongodb/actions/BlogID";

// @route   GET POST DELETE api/blogs/getBlogById
// @desc    Blog Creation, Retrieval, or Deletion
// @access  Admin
const handler = (req, res) => {
  if (req.method === "GET") {
    return getBlog()
      .then((payload) => res.status(200).json({ success: true, payload }))
      .catch((error) =>
        res.status(400).json({ success: false, message: error.message })
      );
  } 
};

export default handler;
