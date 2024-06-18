import { Request, Response } from "express";
import { DeleteOfficeUseCase } from "./DeleteOfficeUseCase";

export class DeleteOfficeController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const deleteOfficeUseCase = new DeleteOfficeUseCase();
    const result = await deleteOfficeUseCase.execute({ id });
    return res.status(202).json(result);
  }
}
