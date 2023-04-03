import { Movie } from "@prisma/client";
import { UpdateMovieDTO } from "../../dtos/UpdateMovieDTO";
import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/AppError";

export class UpdateMovieUseCase{
  async execute({id,title,duration,release_date}: UpdateMovieDTO):Promise<Movie>{
    // Verificar se existe filme com o id mencionado 
    const movieExists = await prisma.movie.findUnique({
      where:{
        id: id,
      }
    });
    if(!movieExists){
      throw new AppError("Id movie does not exists");
    }
    const new_Movie = await prisma.movie.update({
      where:{
        id: id
      },
      data: {
        title: title,
        duration: duration,
        release_date: release_date,
      }
    })
    return new_Movie;

  }
}