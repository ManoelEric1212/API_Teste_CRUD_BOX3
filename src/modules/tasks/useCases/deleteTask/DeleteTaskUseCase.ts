import { Tarefa } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { DeleteTaskDTO } from "../../dtos/DeleteTaskDTO";

export class DeleteTaskUseCase {
  async execute({ id }: DeleteTaskDTO): Promise<Tarefa> {
    const TaskExists = await prisma.tarefa.findUnique({
      where: {
        id,
      },
    });
    if (!TaskExists) {
      throw new AppError("Tarefa não existe para deletar!");
    }
    await prisma.tarefa.delete({
      where: {
        id,
      },
    });
    return TaskExists;
  }
}
