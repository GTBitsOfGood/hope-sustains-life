import bcrypt from "bcryptjs";
import crypto from "crypto";

export const getUuid = () => {
  return crypto.randomUUID();
};

export const hash = async (value) => {
  return await bcrypt.hash(value, 10);
};

export const comparePasswords = async (passwordA, passwordB) => {
  return await bcrypt.compare(passwordA, passwordB);
};
