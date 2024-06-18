import { Request, Response } from "express";
import { UpdateTaskUseCase } from "./UpdateTAskUseCase";

export class UpdateTaskController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { descricao, duracao, status } = req.body;
    const updateTaskUseCase = new UpdateTaskUseCase();
    const result = await updateTaskUseCase.execute({
      id,
      descricao,
      duracao,
      status,
    });
    return res.status(202).json(result);
  }
}
