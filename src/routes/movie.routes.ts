import { Router } from "express";
import { CreateMovieController } from "../modules/movies/useCases/createMovie/CreateMovieController";
import { CreateMovieRentController } from "../modules/movies/useCases/createMovieRent/CreateMovieRentController";
import { GetMoviesController } from "../modules/movies/useCases/getMovies/GetMoviesController";
import { GetMoviesByReleaseController } from "../modules/movies/useCases/getMoviesByReleaseDate/GetMoviesByReleaseDateContorller";

const createMovieController = new CreateMovieController();
const createMovieRentController = new CreateMovieRentController();
const getMoviesByReleaseController = new GetMoviesByReleaseController();
const getMoviesController = new GetMoviesController();
const movieRoutes = Router();

movieRoutes.post("/", createMovieController.handle);
movieRoutes.get("/", getMoviesController.handle);
movieRoutes.get("/release", getMoviesByReleaseController.handle);
movieRoutes.post("/rent", createMovieRentController.handle);

export {movieRoutes}