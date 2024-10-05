import { IDependencies } from "../../application/interfaces/IDependencies";

import { loginController } from "./login";
import { signupController } from "./signup";



export const controllers=(dependencies:IDependencies)=>{
    return{
        login:loginController(dependencies),
        signup:signupController(dependencies)
    }
}