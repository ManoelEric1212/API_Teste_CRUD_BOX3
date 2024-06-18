import { Request, Response } from "express";
import { GetOfficeByIdUseCase } from "./GetOfficeByIdUseCase";

export class GetOfficeByIdController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const getOfficeByIdUseCase = new GetOfficeByIdUseCase();
    const result = await getOfficeByIdUseCase.execute(id);
    return res.status(200).json(result);
  }
}
