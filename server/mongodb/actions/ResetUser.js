import PasswordResetRequest from "../models/PasswordResetRequest";
import User from "../models/User";
import { hashPassword } from "../../../utils/password";
import mongoDB from "../index";

export async function resetUser(token, password) {
  if (token === null || password === null) {
    throw new Error("Token and password must be provided!");
  }

  await mongoDB();

  const hashedPassword = await hashPassword(password);

  const passwordRequest = await PasswordResetRequest.findOne({
    token: token,
  });

  if (passwordRequest === null) {
    throw new Error("Password reset query not found!");
  }

  const user = await User.findOneAndUpdate(
    { email: passwordRequest.email },
    { password: hashedPassword },
    { new: false }
  );

  if (user === null) {
    throw new Error("User not found!");
  }

  await PasswordResetRequest.findOneAndDelete({
    token: token,
  });
}
