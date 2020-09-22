import mongoose from "mongoose";

const { Schema } = mongoose;

const BlogPostSchema = new Schema({
  headline: String,
  author: String,
  body: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.User ??
  mongoose.model("BlogPosts", BlogPostSchema);
