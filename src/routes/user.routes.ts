import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";

// Instanciando o controller
const createUserController = new CreateUserController();
// Instanciando o Router
const userRoutes = Router();
// Criando o Post
userRoutes.post("/", createUserController.handle);

export {userRoutes};