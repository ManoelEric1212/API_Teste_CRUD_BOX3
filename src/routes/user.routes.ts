import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";
import { GetAllUsersController } from "../modules/users/useCases/getUsers/GetAllUsersController";

// Instanciando o controller
const createUserController = new CreateUserController();
const getAllUsersController = new GetAllUsersController();
// Instanciando o Router
const userRoutes = Router();
// Criando o Post
userRoutes.post("/", createUserController.handle);
userRoutes.get("/", getAllUsersController.handle);

export {userRoutes};