import { Tarefa } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/AppError";

export class GetAllTasksUseCase {
  async execute(): Promise<Tarefa[]> {
    const tarefas = await prisma.tarefa.findMany({});
    if (!tarefas.length) {
      throw new AppError("Não existem tarefas na base de dados !", 204);
    }
    return tarefas;
  }
}
