import mongoDB from "../index";
import PasswordResetRequest from "../models/PasswordResetRequest";
import User from "../models/User";
import { sendEmail } from "../../actions/email.js";
import { getUuid } from "../../../utils/encrypt";
import urls from "../../../utils/urls.js";

export async function forgotPassword(email) {
  if (email == null) {
    throw new Error("Email must be provided");
  }

  await mongoDB();

  const token = getUuid();

  const userCheck = await User.exists({ email: email });
  if (!userCheck) {
    throw new Error("No user exists with that email.");
  }

  const passwordResetRequest = await PasswordResetRequest.create({
    email: email,
    token: token,
  });

  const subject = "[HSL] Password reset request";
  const link = `${urls.baseUrl}/resetpassword/${token}`;
  const body = `
  <html>
    <head>
        <style>
        </style>
    </head>
    <body>
        <p>Hello,</p>
        <p>A reset password request was initiated for your account.</p>
        <p>Please click the link below to reset your password. </p>
        <a href="${link}">Reset Password</a>
    </body>
  </html>
  `;

  await sendEmail(email, subject, body, "text/html");
  return passwordResetRequest;
}
