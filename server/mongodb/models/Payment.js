import mongoose from "mongoose";

const { Schema } = mongoose;

const PaymentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  intentID: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Payment ??
  mongoose.model("Payment", PaymentSchema);
