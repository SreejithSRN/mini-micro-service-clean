import { UserEntity } from "../../domain/entities";
import { IDependencies } from "../interfaces/IDependencies";

export const findUserByEmailUseCase=(dependencies:IDependencies)=>{
    const {repositories:{findByEmail}}=dependencies
    return {
        execute:async (email: string): Promise<UserEntity | null>=>{
            return await findByEmail(email)
        }
    }    
}