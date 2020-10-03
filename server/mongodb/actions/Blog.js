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

export async function createBlog(
  author,
  title,
  subtitle,
  body,
  references,
  isPublished
) {
  if (
    author == null ||
    title == null ||
    subtitle == null ||
    body == null ||
    references == null
  ) {
    throw new Error(
      "Author, title, subtitle, body, and references must be provided"
    );
  }

  await mongoDB();

  try {
    return BlogPost.create({
      isPublished: isPublished,
      author: author,
      title: title,
      subtitle: subtitle,
      body: body,
      references: references,
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
