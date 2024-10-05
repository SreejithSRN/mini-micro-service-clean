import { AdminLoginRequest, userEntity } from "../../../../domain/entities";
import { Admin } from "../models/loginSchema";
import bcrypt from "bcrypt"


export const login=async (data:AdminLoginRequest):Promise<userEntity | null>=>{
    try {
        if(!data.email || !data.password){
            throw new Error ("email and password required")
        }  
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
          throw new Error("Invalid email format");
        }    
        if (data.password.length < 8) {
            throw new Error("Password must be at least 8 characters long");
        }

        const admin:userEntity | null=await Admin.findOne({
            email:data.email
        })
        if(admin){
            const passwordMatch:boolean=await bcrypt.compare(data.password, admin.password)
            if(!passwordMatch){
                throw new Error("invalid credentials")
            }else{
                return admin as userEntity
            }
        }else{
            throw new Error ("Admin not found")
        }
       
    } catch (error:any) {
        throw new Error(error?.message)
        
    }

}