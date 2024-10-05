import { AdminLoginRequest, UserData, userEntity } from "../../domain/entities";

export interface IRepositories {
  login: (data: AdminLoginRequest) => Promise<userEntity | null>;
  addUser: (data: UserData) => Promise<userEntity | null>;
}
