import bcrypt from "bcryptjs";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import mongoDB from "../index";
import PasswordResetRequest from "../models/PasswordResetRequest";
import { sendEmail } from "../../actions/email.js";
import baseUrl from "../../../utils/urls.js";

export async function forgotPassword(email) {
  if (email == null) {
    throw new Error("Email must be provided");
  }

  const token = crypto.randomBytes(128).toString();
  const hashedToken = await bcrypt.hash(token, 10);

  const request = await PasswordResetRequest.create({ email: email, token: hashedToken });

  const subject = "[HSL] Password reset request";
  const link = `${baseUrl}/resetpassword/${hashedToken}`;
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
  }
}
