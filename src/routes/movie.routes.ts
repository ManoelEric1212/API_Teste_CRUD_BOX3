import { Router } from "express";
import { CreateMovieController } from "../modules/movies/useCases/createMovie/CreateMovieController";
import { CreateMovieRentController } from "../modules/movies/useCases/createMovieRent/CreateMovieRentController";
import { GetMoviesController } from "../modules/movies/useCases/getMovies/GetMoviesController";
import { GetMoviesByReleaseController } from "../modules/movies/useCases/getMoviesByReleaseDate/GetMoviesByReleaseDateContorller";
import { UpdateMovieController } from "../modules/movies/useCases/updateMovie/UpdateMovieController";
import { DeleteMovieController } from "../modules/movies/useCases/deleteMovie/DeleteMovieController";

const createMovieController = new CreateMovieController();
const createMovieRentController = new CreateMovieRentController();
const getMoviesByReleaseController = new GetMoviesByReleaseController();
const getMoviesController = new GetMoviesController();
const updateMovieController = new UpdateMovieController();
const deleteMovieController = new DeleteMovieController();
const movieRoutes = Router();

movieRoutes.post("/", createMovieController.handle);
movieRoutes.get("/", getMoviesController.handle);
movieRoutes.get("/release", getMoviesByReleaseController.handle);
movieRoutes.post("/rent", createMovieRentController.handle);
movieRoutes.patch("/:id", updateMovieController.handle);
movieRoutes.delete("/:id", deleteMovieController.handle);

export {movieRoutes}