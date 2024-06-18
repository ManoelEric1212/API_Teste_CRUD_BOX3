import { Cliente } from "@prisma/client";
import { UpdateClientDTO } from "../../dtos/UpdateClientDTO";
import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/AppError";

export class UpdateClientUseCase {
  async execute({
    id,
    cpf,
    nome,
    telefone,
  }: UpdateClientDTO): Promise<Cliente> {
    const clientExists = await prisma.cliente.findUnique({
      where: {
        id: id,
      },
    });
    if (!clientExists) {
      throw new AppError("Id do cliente não existe");
    }
    const new_Movie = await prisma.cliente.update({
      where: {
        id: id,
      },
      data: {
        cpf,
        nome,
        telefone,
      },
    });
    return new_Movie;
  }
}
