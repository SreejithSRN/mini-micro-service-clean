import { IFindUserByEmailUseCase, ILoginUserUseCase, ISignUpUserUseCase } from "../../domain/useCaseInterface";
import { IDependencies } from "./IDependencies";

export interface IUsecases{
    signUpUserUseCase:(dependencies:IDependencies)=>ISignUpUserUseCase,
    loginUserUseCase:(dependencies:IDependencies)=>ILoginUserUseCase,
    findUserByEmailUseCase:(dependencies:IDependencies)=>IFindUserByEmailUseCase    
}