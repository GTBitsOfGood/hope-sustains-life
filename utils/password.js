import bcrypt from "bcryptjs";

export const hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

export const comparePassword = async (passwordA, passwordB) => {
  return await bcrypt.compare(passwordA, passwordB);
};
