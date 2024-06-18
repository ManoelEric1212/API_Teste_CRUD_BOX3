import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { nome, email, cpf, status, telefone, categoria } = req.body;
    // Instanciando o caso de uso do create user
    const createUserCase = new CreateUserUseCase();
    // Armazenar resultado executando o caso de uso
    const result = await createUserCase.execute({
      nome,
      email,
      cpf,
      status,
      telefone,
      categoria,
    });
    return res.status(201).json(result);
  }
}
