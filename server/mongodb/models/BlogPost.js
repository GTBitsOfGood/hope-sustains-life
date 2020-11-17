import mongoose from "mongoose";

const { Schema } = mongoose;

const BlogPostSchema = new Schema({
  isPublished: {
    type: Boolean,
    required: false,
  },
  author: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  references: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  orderIndex: {
    type: Number,
  },
  image: {
    public_id: String, // This uniquely identifies image asset in Cloudinary
    url: String,
  },
});

BlogPostSchema.pre("save", function (next) {
  if (!this.orderIndex) {
    // Set the order index to the last for newly added blog post
    BlogPostModel.countDocuments((err, count) => {
      if (count) {
        this.orderIndex = count;
      }
      next();
    });
  } else {
    next();
  }
});

BlogPostSchema.post("remove", async function () {
  const blogs = await BlogPostModel.find({}).sort("orderIndex").exec();
  const bulkUpdates = blogs.map((blog, index) => {
    return {
      updateOne: {
        filter: { _id: blog.id },
        update: { orderIndex: index },
      },
    };
  });

  await BlogPostModel.bulkWrite(bulkUpdates);
});

const BlogPostModel =
  mongoose.models.BlogPost ?? mongoose.model("BlogPost", BlogPostSchema);
export default BlogPostModel;
