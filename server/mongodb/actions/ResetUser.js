import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoDB from "../index";
import PasswordResetRequest from "../models/PasswordResetRequest";
import User from "../models/User";

export async function resetUser(token, password) {
  if (password == null) {
    throw new Error("Password must be provided!");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const request = await PasswordResetRequest.find({ token: token });

  if (request.length === 0) {
    throw new Error("Password reset query not found");
  }

  await PasswordResetRequest.findOneAndDelete({ token: token });

  await User.findOneAndUpdate(
    { email: request[0].email },
    { password: hashedPassword },
    { new: false }
  );
}
