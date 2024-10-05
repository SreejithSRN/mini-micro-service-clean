import { UserEntity, UserLoginEntity } from "../../../../domain/entities";
import { User } from "../models/loginCredential";
import bcrypt from "bcrypt";

export const login = async (
  data: UserLoginEntity
): Promise<UserEntity | null> => {
  try {
    const user: UserEntity | null = await User.findOne({ email: data.email });
    if (user) {
      const isMatch: boolean = await bcrypt.compare(
        data.password,
        user.password
      );
      if (!isMatch) {
        throw new Error("Username or Password incorrect");
      } else {
        return user as UserEntity;
      }
    } else {
      throw new Error("User not found");
    }
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
