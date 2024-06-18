import { Request, Response } from "express";
import { UpdateOfficeUseCase } from "./UpdateOfficesUseCase";

export class UpdateOfficeController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { descricao } = req.body;
    const updateOfficeUseCase = new UpdateOfficeUseCase();
    const result = await updateOfficeUseCase.execute({
      id,
      descricao,
    });
    return res.status(202).json(result);
  }
}
