import { Router } from "express";
import { CreateOfficeController } from "../modules/offices/useCases/createOffice/CreateOfficeController";
import { GetAllOfficesController } from "../modules/offices/useCases/getOffices/GetAllOfficesController";
import { DeleteOfficeController } from "../modules/offices/useCases/deleteOffice/DeleteOfficeController";
import { UpdateOfficeController } from "../modules/offices/useCases/updateOffice/UpdateOfficeController";
import { GetOfficeByIdController } from "../modules/offices/useCases/getOfficeById/GetOfficeByIdController";

const createTaskController = new CreateOfficeController();
const getAllTasksController = new GetAllOfficesController();
const deleteTaskController = new DeleteOfficeController();
const updateTaskController = new UpdateOfficeController();
const getTaskByIdController = new GetOfficeByIdController();

const officeRoutes = Router();

officeRoutes.post("/", createTaskController.handle);
officeRoutes.get("/", getAllTasksController.handle);
officeRoutes.delete("/:id", deleteTaskController.handle);
officeRoutes.patch("/:id", updateTaskController.handle);
officeRoutes.get("/cargos/:id", getTaskByIdController.handle);

export { officeRoutes };
