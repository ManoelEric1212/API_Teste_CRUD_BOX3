import { Tarefa } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetTaskByIdUseCase {
  async execute(taskId: string): Promise<Tarefa> {
    const tarefa = await prisma.tarefa.findUnique({
      where: {
        id: taskId,
      },
    });
    if (!tarefa) {
      throw new Error("Tarefa não encontrada");
    }
    return tarefa;
  }
}
