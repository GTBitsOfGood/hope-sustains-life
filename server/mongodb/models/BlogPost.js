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
});

export default mongoose.models.BlogPost ??
  mongoose.model("BlogPost", BlogPostSchema);
