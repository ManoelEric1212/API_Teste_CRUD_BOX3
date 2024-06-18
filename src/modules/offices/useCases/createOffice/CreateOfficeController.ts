import { Request, Response } from "express";
import { CreateOfficeUseCase } from "./CreateOfficeUseCase";
export class CreateOfficeController {
  async handle(req: Request, res: Response) {
    const { descricao } = req.body;
    const createOfficeUserCase = new CreateOfficeUseCase();

    const result = await createOfficeUserCase.execute({
      descricao,
    });
    return res.status(201).json(result);
  }
}
