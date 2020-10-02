import mongoose from "mongoose";

const { Schema } = mongoose;

const SubscriberSchema = new Schema({
  email: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
});

export default mongoose.models.Subscriber ??
  mongoose.model("Subscriber", SubscriberSchema);
