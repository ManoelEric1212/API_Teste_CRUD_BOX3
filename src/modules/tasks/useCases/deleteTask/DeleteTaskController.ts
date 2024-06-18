import { Request, Response } from "express";
import { DeleteTaskUseCase } from "./DeleteTaskUseCase";

export class DeleteTaskController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const deleteTaskUseCase = new DeleteTaskUseCase();
    const result = await deleteTaskUseCase.execute({ id });
    return res.status(202).json(result);
  }
}
