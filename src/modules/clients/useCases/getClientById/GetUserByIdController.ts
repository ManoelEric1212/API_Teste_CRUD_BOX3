import { Request, Response } from "express";
import { GetClientByIdUseCase } from "./GetClientByIdUseCase";

export class GetClientByIdController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const getUserByIdUseCase = new GetClientByIdUseCase();
    const result = await getUserByIdUseCase.execute(id);
    return res.status(200).json(result);
  }
}
