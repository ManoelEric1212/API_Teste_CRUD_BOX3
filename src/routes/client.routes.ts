import { Router } from "express";
import { CreateClientController } from "../modules/clients/useCases/createClient/CreateClientController";
import { GetAllClientsController } from "../modules/clients/useCases/getClients/GetAllClientsController";
import { DeleteClientController } from "../modules/clients/useCases/deleteClient/DeleteUserController";
import { UpdateClientController } from "../modules/clients/useCases/updateClient/UpdateUserController";
import { GetClientByIdController } from "../modules/clients/useCases/getClientById/GetUserByIdController";

const createClientController = new CreateClientController();
const getAllClientsController = new GetAllClientsController();
const deleteClientController = new DeleteClientController();
const updateClientController = new UpdateClientController();
const getClientByIdController = new GetClientByIdController();

const clientRoutes = Router();

clientRoutes.post("/", createClientController.handle);
clientRoutes.get("/", getAllClientsController.handle);
clientRoutes.delete("/:id", deleteClientController.handle);
clientRoutes.patch("/:id", updateClientController.handle);
clientRoutes.get("/cliente/:id", getClientByIdController.handle);

export { clientRoutes };
