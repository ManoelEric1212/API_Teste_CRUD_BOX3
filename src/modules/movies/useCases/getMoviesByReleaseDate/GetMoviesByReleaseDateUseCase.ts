import { Movie } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetMoviesByReleaseDateUseCase {
  async execute(): Promise<Movie[]>{
    const movies = await prisma.movie.findMany({
      orderBy: {
        release_date: "desc"
      }, 
      include: {
        MovieRent :{
          select :{
            user: {
              select: {
                name: true,
                email: true,
              }
            },
          }
        }
      }
    });
    return movies;
  }
}