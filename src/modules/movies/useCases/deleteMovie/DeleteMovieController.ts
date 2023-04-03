import { Request, Response } from "express";
import { DeleteMovieUseCase } from "./DeleteMovieUseCase";

export class DeleteMovieController{
  async handle(req: Request, res: Response){
    const {id} = req.params;
    const deleteMovieUseCase = new DeleteMovieUseCase();
    const result = await deleteMovieUseCase.execute({id})
    return res.status(202).json(result);
  }
}