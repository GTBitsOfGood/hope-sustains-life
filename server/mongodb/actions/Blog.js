import mongoDB from "../index";
import BlogPost from "../models/BlogPost";

export async function getBlogs() {
  await mongoDB();

  try {
    return BlogPost.find({});
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function createBlog(author, title, body) {
  if (author == null || title == null || body == null) {
    throw new Error("Author, title, and body must be provided");
  }

  await mongoDB();

  try {
    return BlogPost.create({
      isPublished: false,
      author: author,
      title: title,
      body: body,
    });
  } catch (error) {
    throw new Error(error.message);
  }
}
