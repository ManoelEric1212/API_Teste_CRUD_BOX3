import { Tarefa } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateTaskDTO } from "../../dtos/CreateTaskDTO";

export class CreateTaskUseCase {
  async execute({
    descricao,
    duracao,
    status,
  }: CreateTaskDTO): Promise<Tarefa> {
    const task = await prisma.tarefa.create({
      data: {
        descricao,
        status,
        duracao,
      },
    });
    return task;
  }
}
