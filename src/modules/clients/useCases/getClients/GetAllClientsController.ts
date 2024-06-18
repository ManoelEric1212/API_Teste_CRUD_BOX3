import { Request, Response } from "express";
import { GetAllClientsUseCase } from "./GetAllClientsUseCase";

export class GetAllClientsController {
  async handle(req: Request, res: Response) {
    const getAllClientsUseCase = new GetAllClientsUseCase();
    const result = await getAllClientsUseCase.execute();
    return res.status(200).json(result);
  }
}
