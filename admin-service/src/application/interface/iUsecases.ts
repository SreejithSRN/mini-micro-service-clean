import { IAddUserCase, IloginAdminUseCase } from "../../domain/useCaseinterface";
import { IDependencies } from "./iDependencies";


export interface IUsecases{
     loginAdminUseCase:(dependencies:IDependencies)=>IloginAdminUseCase,
     addUserUseCase:(dependencies:IDependencies)=>IAddUserCase
}