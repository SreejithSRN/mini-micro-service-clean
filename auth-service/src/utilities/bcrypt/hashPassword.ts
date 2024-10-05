import { genSalt, hash } from "bcrypt";

export const hashPassword = async (password: string) => {
  try {
    const hashPassword = await hash(password, await genSalt(10));
    if (!hashPassword) {
      throw new Error("Password hashing error");
    }
    return hashPassword;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
