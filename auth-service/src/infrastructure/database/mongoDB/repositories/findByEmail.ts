import { UserEntity } from "../../../../domain/entities";
import { User } from "../models/loginCredential";

export const findByEmail=async(email:string):Promise<UserEntity|null>=>{
    try {
        const user= await User.findOne({email})
        return user        
    } catch (error) {
        throw error
        
    }
}
