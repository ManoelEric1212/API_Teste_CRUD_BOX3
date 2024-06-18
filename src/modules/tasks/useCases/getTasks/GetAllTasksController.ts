import { Request, Response } from "express";
import { GetAllTasksUseCase } from "./GetAllTasksUseCase";

export class GetAllTasksController {
  async handle(req: Request, res: Response) {
    const getAllTasksUseCase = new GetAllTasksUseCase();
    const result = await getAllTasksUseCase.execute();
    return res.status(200).json(result);
  }
}
