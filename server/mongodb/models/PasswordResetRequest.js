import mongoose from "mongoose";

const { Schema } = mongoose;

const PasswordResetRequestSchema = new Schema({
  token: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    expires: "1h",
    default: Date.now,
  },
});

export default mongoose.models.PasswordResetRequest ??
  mongoose.model("PasswordResetRequest", PasswordResetRequestSchema);
