import { Request, Response } from "express";
import { CreateClientUseCase } from "./CreateClientUseCase";
export class CreateClientController {
  async handle(req: Request, res: Response) {
    const { nome, cpf, telefone } = req.body;
    const createUserCase = new CreateClientUseCase();
    const result = await createUserCase.execute({
      nome,
      cpf,
      telefone,
    });
    return res.status(201).json(result);
  }
}
