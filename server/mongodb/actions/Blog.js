import mongoDB from "../index";
import BlogPost from "../models/BlogPost";
import { deleteImage } from "../../actions/cloudinary";
import { mod } from "../../../utils/math";

export async function getBlogs(isPublishedOnly) {
  await mongoDB();

  try {
    let searchQuery = {};
    if (isPublishedOnly) {
      searchQuery = { isPublished: true };
    }

    return await BlogPost.find(searchQuery).sort("-orderIndex").exec();
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
  isPublished,
  image
) {
  if (author == null || title == null || subtitle == null || body == null) {
    throw new Error("Author, title, subtitle, and body must be provided");
  }

  await mongoDB();

  try {
    return await BlogPost.create({
      author: author,
      title: title,
      subtitle: subtitle,
      body: body,
      references: references,
      isPublished: isPublished,
      image: image,
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
    const blogToRemove = await BlogPost.findById(id);
    if (blogToRemove?.image?.public_id) {
      deleteImage(blogToRemove.image.public_id);
    }

    return await blogToRemove.remove();
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function reorderBlogs(blogs) {
  try {
    const bulkUpdates = blogs.map((blog) => {
      return {
        updateOne: {
          filter: { _id: blog.id },
          update: { orderIndex: blog.orderIndex },
        },
      };
    });

    return await BlogPost.bulkWrite(bulkUpdates);
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function setPublished(blogId, isPublished) {
  if (blogId == null || isPublished == null) {
    throw new Error("ID and published status must be provided!");
  }

  await mongoDB();

  try {
    return await BlogPost.findByIdAndUpdate(blogId, {
      isPublished: isPublished,
    });
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function updateBlog(
  author,
  title,
  subtitle,
  body,
  references,
  isPublished,
  image,
  blogId,
  deleteOriginalImage
) {
  await mongoDB();

  if (author == null || title == null || subtitle == null || body == null) {
    throw new Error("Author, title, subtitle, and body must be provided");
  }

  const updateParams = {
    author,
    title,
    subtitle,
    body,
    references,
    isPublished,
  };

  try {
    if (deleteOriginalImage) {
      const oldBlog = await BlogPost.findById(blogId);
      const image_id = oldBlog?.image?.public_id;

      if (image_id) {
        deleteImage(image_id);
      }

      updateParams["image"] = image;
    }

    return await BlogPost.findByIdAndUpdate(blogId, updateParams);
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getRecommendedBlogs(orderIndex) {
  if (orderIndex < 0) {
    throw new Error("Invalid order index");
  }

  await mongoDB();

  const TOTAL_RECOMMENDED_BLOGS = 3;
  const orderIndices = [];

  try {
    const count = await BlogPost.countDocuments();
    for (let i = 1; i <= TOTAL_RECOMMENDED_BLOGS; i++) {
      orderIndices.push(mod(orderIndex - i, count));
    }

    return await BlogPost.find({
      orderIndex: { $in: orderIndices },
      isPublished: true,
    });
  } catch (error) {
    throw new Error(error.message);
  }
}
