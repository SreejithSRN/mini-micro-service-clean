import { UserEntity } from "../../domain/entities";
import { IDependencies } from "../interfaces/IDependencies";

export const signUpUserUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { signup },
  } = dependencies;

  return {
    execute: async (user: UserEntity): Promise<UserEntity | null> => {
      try {
        return await signup(user)
      } catch (error: any) {
        throw new Error(error?.message);
      }
    },
  };
};
