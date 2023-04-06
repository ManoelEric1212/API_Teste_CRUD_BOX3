import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateMovieRentDTO } from "../../dtos/CreateMovieRentDTO";

export class CreateMovieRentUseCase {
  async execute({movieId, userId}: CreateMovieRentDTO): Promise<void>{
    // Verifica se filme existe
    const movieExists = await prisma.movie.findUnique({
      where:{
        id: movieId
      }
    })
    if(!movieExists){
      throw new AppError("Movie does not exists!")
    }
    // Verificar se o filme já está associado a um usuário 
    const movieAlreadyRented = await prisma.movieRent.findFirst({
      where: {
        movieId: movieId
      }
    })
    if(movieAlreadyRented){
      throw new AppError("Movie already rented!");
    }
    // Verificar se o usuário existe
    const userExists = await prisma.user.findUnique({
      where:{
        id: userId
      }
    });

    if(!userExists){
      throw new AppError("USer does not exists")
    }
    //criar a locação
    await prisma.movieRent.create({
      data:{
        movieId,
        userId,
      },
    })

  }
}