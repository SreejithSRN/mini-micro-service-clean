import { UserEntity } from "../entities";

 export interface ISignUpUserUseCase {
  execute(user: UserEntity): Promise<UserEntity | null>;
}
