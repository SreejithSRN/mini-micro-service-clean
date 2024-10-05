import { IaddToCartUseCase, IGetCartUseCase } from "../../domain/useCaseInterface";
import { IDependencies } from "./IDependencies";

export interface IUseCases{
    addToCartUseCase:(dependencies:IDependencies)=> IaddToCartUseCase;
    getCart:(dependencies:IDependencies)=> IGetCartUseCase
}