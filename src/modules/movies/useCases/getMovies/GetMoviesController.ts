import { Request, Response } from "express";
import { GetMoviesUseCase } from "./GetMoviesUseCase";

export class GetMoviesController {
  async handle(req: Request, res: Response){
    const getMoviesUseCase = new GetMoviesUseCase();
    const result = await getMoviesUseCase.execute();
    return res.status(200).json(result);
  }
}