import mongoDB from "../index";
import BlogPost from "../models/BlogPost";

export async function getBlog() {
  await mongoDB();

  try {
    return BlogPost.find({});
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getBlog(id) {
  if (id == null) {
    throw new Error("ID must be provided");
  }

  await mongoDB();

  try {
    return BlogPost.findById({
      id: id,
    });
  } catch (error) {
    throw new Error(error.message);
  }
}
