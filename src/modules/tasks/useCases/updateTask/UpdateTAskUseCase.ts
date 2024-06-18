import { Tarefa } from "@prisma/client";
import { UpdateTaskDTO } from "../../dtos/UpdateTaskDTO";
import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/AppError";

export class UpdateTaskUseCase {
  async execute({
    id,
    descricao,
    duracao,
    status,
  }: UpdateTaskDTO): Promise<Tarefa> {
    const tarefaExists = await prisma.tarefa.findUnique({
      where: {
        id: id,
      },
    });
    if (!tarefaExists) {
      throw new AppError("Id da tarefa não existe");
    }
    const new_Task = await prisma.tarefa.update({
      where: {
        id: id,
      },
      data: {
        descricao,
        duracao,
        status,
      },
    });
    return new_Task;
  }
}
