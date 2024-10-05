import { AdminLoginRequest, userEntity } from "../entities";

export interface IloginAdminUseCase{
    execute(credentials:AdminLoginRequest):Promise<userEntity | null>
}