import mongoose from "mongoose";

const { Schema } = mongoose;

const BlogPostSchema = new Schema({
  isPublished: {
    type: Boolean,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  orderIndex: {
    type: Number,
  },
});

BlogPostSchema.pre("save", function (next) {
  if (!this.orderIndex) {
    BlogPostModel.countDocuments((err, count) => {
      if (count) {
        // Set the order index to the last for newly added blog post
        this.orderIndex = count;
      }
      next();
    });
  } else {
    next();
  }
});

const BlogPostModel = mongoose.model("BlogPost", BlogPostSchema);
export default BlogPostModel;
