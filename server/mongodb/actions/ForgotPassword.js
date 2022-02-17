import bcrypt from "bcryptjs";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import mongoDB from "../index";
import PasswordResetRequest from "../models/PasswordResetRequest";
import User from "../models/User";
import { sendEmail } from "../../actions/email.js";
import urls from "../../../utils/urls.js";

export async function forgotPassword(email) {
  if (email == null) {
    throw new Error("Email must be provided");
  }

  await mongoDB();

  try {
    const token = crypto.randomBytes(128).toString();
    const hashedToken = await bcrypt.hash(token, 10);

    const userCheck = await User.exists({ email: email });
    if (!userCheck) {
      throw new Error("No user exists with that email.");
    }

    const passwordResetRequest = await PasswordResetRequest.create({ email: email, token: hashedToken });

    const subject = "[HSL] Password reset request";
    const link = `${urls.baseUrl}/resetpassword/${hashedToken}`;
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

    const emailRequest = await sendEmail(email, subject, body, "text/html");
    if (emailRequest == null) {
      throw new Error("Email failed to send.");
    } else {
      return passwordResetRequest;
    }
  } catch (error) {
    if (error.message.includes("duplicate key error")) {
      throw new Error("There is an existing password reset request for this user.")
    } else {
      throw new Error(error.message);
    }
  }
}
