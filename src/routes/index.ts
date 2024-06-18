import { Router } from "express";

import { userRoutes } from "./user.routes";
import { clientRoutes } from "./client.routes";
import { taskRoutes } from "./tasks.routes";
import { officeRoutes } from "./office.routes";

const routes = Router();
routes.use("/usuarios", userRoutes);
routes.use("/clientes", clientRoutes);
routes.use("/tarefas", taskRoutes);
routes.use("/cargos", officeRoutes);

export { routes };
