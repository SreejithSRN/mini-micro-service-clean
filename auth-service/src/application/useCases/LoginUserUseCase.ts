import { UserEntity, UserLoginEntity } from "../../domain/entities";
import { IDependencies } from "../interfaces/IDependencies";

 export const loginUserUseCase=(dependencies:IDependencies)=>{

    const {repositories:{login}}=dependencies

    return {
        execute : async (data: UserLoginEntity): Promise<UserEntity | null>=>{

            try {
                return await login(data)
                
            } catch (error:any) {
                throw new Error(error?.message)
            }

        }
    }
    
}