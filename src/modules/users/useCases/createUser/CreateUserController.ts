import {Request, Response} from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
export class CreateUserController {
  async handle(req: Request, res: Response){
    const {name, email} = req.body;
    // Instanciando o caso de uso do create user
    const createUserCase = new CreateUserUseCase();
    // Armazenar resultado executando o caso de uso
    const result = await createUserCase.execute({name, email});
    return res.status(201).json(result);
  }
}