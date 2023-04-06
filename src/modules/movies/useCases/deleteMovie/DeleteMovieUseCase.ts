import { Movie } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { DeleteMovieDTO } from "../../dtos/DeleteMovieDTO";

export class DeleteMovieUseCase {
  async execute({id}: DeleteMovieDTO ): Promise<Movie>{
    // Verificar se o Filme existe
    const MovieExists = await prisma.movie.findUnique({
      where: {
        id,
      }
    });
    if(!MovieExists){
      throw new AppError("Movie not exists for delete !")
    }
   await prisma.movie.delete({
      where:{
        id
      }
    });
    return MovieExists;
  }
}