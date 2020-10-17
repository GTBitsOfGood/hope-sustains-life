import { deleteSubscriber } from "../../../../server/mongodb/actions/Subscribers";

const handler = (req, res) => {
  const id = req.query.id;

  if (req.method === "DELETE") {
    return deleteSubscriber(id)
      .then(() => res.status(200).json({ success: true }))
      .catch((error) =>
        res.status(400).json({ success: false, message: error.message })
      );
  }
};

export default handler;
