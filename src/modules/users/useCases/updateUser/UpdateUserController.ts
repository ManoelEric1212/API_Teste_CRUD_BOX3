import { Request, Response } from "express";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

export class UpdateUserController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { categoria, cpf, email, nome, status, telefone } = req.body;
    const updateUserUseCase = new UpdateUserUseCase();
    const result = await updateUserUseCase.execute({
      id,
      categoria,
      cpf,
      email,
      nome,
      status,
      telefone,
    });
    return res.status(202).json(result);
  }
}
