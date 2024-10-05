import { userEntity } from "../../domain/entities";
import { IDependencies } from "../interface/iDependencies";

export const addUserUseCase=(dependencies:IDependencies)=>{
    const {repositories:{addUser}}=dependencies
    return {
        execute:async(data:userEntity)=>{
        try {
                return await addUser(data)
            }catch (error:any) {
                throw new Error(error?.message)
            
            }
        } 
    }

}