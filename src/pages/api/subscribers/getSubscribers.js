import { getSubscribers } from "../../../../server/mongodb/actions/Subscribers";

const handler = (req, res) => {
  return getSubscribers()
    .then(() => res.status(200).json({ success: true }))
    .catch((error) =>
      res.status(400).json({ success: false, message: error.message })
    );
};

export default handler;
