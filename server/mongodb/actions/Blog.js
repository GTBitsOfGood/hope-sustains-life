import mongoDB from "../index";
import BlogPost from "../models/BlogPost";

export async function getBlogs() {
  await mongoDB();

  try {
    return await BlogPost.find({}).sort("orderIndex").exec();
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

export async function getBlogById(id) {
  if (id == null) {
    throw new Error("ID must be provided");
  }

  await mongoDB();

  try {
    return await BlogPost.findById(id);
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function deleteBlogById(id) {
  if (id == null) {
    throw new Error("ID must be provided");
  }

  await mongoDB();

  try {
    return await BlogPost.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error.message);
  }
}
