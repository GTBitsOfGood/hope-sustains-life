import mongoDB from "../index";
import BlogPost from "../models/BlogPost";

export async function getBlogs() {
  await mongoDB();

  /* Get the blogs from the database and return them */
}

export async function createBlog({ title, body }) {
  if (title == null || body == null) {
    throw new Error("Title and body must be provided");
  }

  await mongoDB();

  try {
    return BlogPost.create({
      isPublished: false,
      author: "Test Author",
      title: title,
      body: body,
    });
  } catch (error) {
    throw new Error(error.message);
  }
}
