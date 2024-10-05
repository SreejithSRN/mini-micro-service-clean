import { UserEntity } from "../../../../domain/entities";
import { User } from "../models/loginCredential";

export const signup = async (data: UserEntity): Promise<UserEntity | null> => {
  try {
    const newUser = await User.create(data);
    if (!newUser) {
      throw new Error("user not created");
    }
    console.log(newUser, "User Created");
    return newUser as UserEntity;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
