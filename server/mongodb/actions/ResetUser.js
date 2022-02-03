import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoDB from "../index";
import User from "../models/User";

export async function resetUser(id, password) {
  if (password == null) {
    throw new Error("Password must be provided!");
  }

  await mongoDB();

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.findOneAndUpdate(
      { _id: id },
      { password: hashedPassword },
      { new: true }
    );

    return jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );
  } catch (error) {
    throw new Error("Invalid token!");
  }
}
