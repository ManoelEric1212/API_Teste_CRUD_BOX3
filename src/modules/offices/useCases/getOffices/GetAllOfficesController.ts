import { Request, Response } from "express";
import { GetAllOfficesUseCase } from "./GetAllOfficesUseCase";

export class GetAllOfficesController {
  async handle(req: Request, res: Response) {
    const getAllOfficesUseCase = new GetAllOfficesUseCase();
    const result = await getAllOfficesUseCase.execute();
    return res.status(200).json(result);
  }
}
