import { UserData, userEntity } from "../entities";

export interface IAddUserCase{
    execute(userData:UserData):Promise<userEntity | null>
}