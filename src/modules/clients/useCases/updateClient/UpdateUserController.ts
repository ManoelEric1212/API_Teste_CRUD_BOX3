import { Request, Response } from "express";
import { UpdateClientUseCase } from "./UpdateClientUseCase";

export class UpdateClientController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { categoria, cpf, email, nome, status, telefone } = req.body;
    const updateClientUseCase = new UpdateClientUseCase();
    const result = await updateClientUseCase.execute({
      id,
      cpf,
      nome,
      telefone,
    });
    return res.status(202).json(result);
  }
}
