import {
  getBlogById,
  deleteBlogById,
} from "../../../../server/mongodb/actions/Blog";

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
    return deleteBlogById(req.query.id)
      .then((payload) => res.status(200).json({ success: true, payload }))
      .catch((error) =>
        res.status(400).json({ success: false, message: error.message })
      );
  }
};

export default handler;
