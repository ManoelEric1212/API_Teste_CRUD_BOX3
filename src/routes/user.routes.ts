import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";
import { GetAllUsersController } from "../modules/users/useCases/getUsers/GetAllUsersController";
import { DeleteUserController } from "../modules/users/useCases/deleteUser/DeleteUserController";
import { UpdateUserController } from "../modules/users/useCases/updateUser/UpdateUserController";
import { GetUserByIdController } from "../modules/users/useCases/getUserById/GetUserByIdController";

const createUserController = new CreateUserController();
const getAllUsersController = new GetAllUsersController();
const deleteUserController = new DeleteUserController();
const updateUserController = new UpdateUserController();
const getUserByIdController = new GetUserByIdController();

const userRoutes = Router();

userRoutes.post("/", createUserController.handle);
userRoutes.get("/", getAllUsersController.handle);
userRoutes.delete("/:id", deleteUserController.handle);
userRoutes.patch("/:id", updateUserController.handle);
userRoutes.get("/usuario/:id", getUserByIdController.handle);

export { userRoutes };
