import jwt from "jsonwebtoken";
import mongoDB from "../index";
import User from "../models/User";
import { hash, comparePasswords } from "../../../utils/encrypt";

export async function login({ email, password }) {
  if (email == null || password == null) {
    throw new Error("All parameters must be provided!");
  }

  await mongoDB();

  const user = await User.findOne({ email });

  if (user != null) {
    const didMatch = comparePasswords(password, user.password);

    if (!didMatch) {
      throw new Error("The password you entered is incorrect!");
    }
  } else {
    throw new Error("User does not exist!");
  }

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
}

export const updateUser = async (id, email, password) => {
  if (email == null || password == null) {
    throw new Error("Email and password must be provided!");
  }

  await mongoDB();

  try {
    const hashedPassword = await hash(password);

    const user = await User.findOneAndUpdate(
      { _id: id },
      { email: email, password: hashedPassword },
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
};

export const verifyToken = async (token) => {
  if (token == null) {
    throw new Error("User is not signed in!");
  }

  try {
    const { id, email } = jwt.verify(token, process.env.JWT_SECRET);

    if (id == null) {
      throw new Error("User unknown!");
    }

    return { id, email };
  } catch (error) {
    throw new Error("Invalid token!");
  }
};
