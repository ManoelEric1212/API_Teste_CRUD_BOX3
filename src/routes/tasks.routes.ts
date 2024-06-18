import { Router } from "express";
import { CreateTasksController } from "../modules/tasks/useCases/createTask/CreateTaskController";
import { GetAllTasksController } from "../modules/tasks/useCases/getTasks/GetAllTasksController";
import { DeleteTaskController } from "../modules/tasks/useCases/deleteTask/DeleteTaskController";
import { UpdateTaskController } from "../modules/tasks/useCases/updateTask/UpdateTaskController";
import { GetTaskByIdController } from "../modules/tasks/useCases/getTaskById/GetTaskByIdController";

const createTaskController = new CreateTasksController();
const getAllTasksController = new GetAllTasksController();
const deleteTaskController = new DeleteTaskController();
const updateTaskController = new UpdateTaskController();
const getTaskByIdController = new GetTaskByIdController();

const taskRoutes = Router();

taskRoutes.post("/", createTaskController.handle);
taskRoutes.get("/", getAllTasksController.handle);
taskRoutes.delete("/:id", deleteTaskController.handle);
taskRoutes.patch("/:id", updateTaskController.handle);
taskRoutes.get("/tarefa/:id", getTaskByIdController.handle);

export { taskRoutes };
