import { setPublished } from "../../../../../server/mongodb/actions/Blog";
import { verifyToken } from "../../../../../server/mongodb/actions/User";

const handler = (req, res) => {
  const blogId = req.query.id;
  const isPublished = req.body.isPublished;
  const token = req.cookies.token;

  return verifyToken(token)
    .then(() => setPublished(blogId, isPublished))
    .then(() => res.status(200).json({ success: true }))
    .catch((error) =>
      res.status(400).json({ success: false, message: error.message })
    );
};

export default handler;
