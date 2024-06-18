import { Request, Response } from "express";
import { GetTaskByIdUseCase } from "./GetTaskByIdUseCase";

export class GetTaskByIdController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const getTaskByIdUseCase = new GetTaskByIdUseCase();
    const result = await getTaskByIdUseCase.execute(id);
    return res.status(200).json(result);
  }
}
