import { Request, Response } from "express";
import { CreateTaskUseCase } from "./CreateTaskUseCase";
export class CreateTasksController {
  async handle(req: Request, res: Response) {
    const { descricao, duracao, status } = req.body;
    const createTaskUserCase = new CreateTaskUseCase();
    const result = await createTaskUserCase.execute({
      descricao,
      duracao,
      status,
    });
    return res.status(201).json(result);
  }
}
