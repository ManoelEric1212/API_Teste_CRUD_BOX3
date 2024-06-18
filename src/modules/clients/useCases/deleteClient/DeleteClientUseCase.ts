import { Cliente } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { DeleteClientDTO } from "../../dtos/DeleteClientDTO";

export class DeleteClientUseCase {
  async execute({ id }: DeleteClientDTO): Promise<Cliente> {
    const ClientExists = await prisma.cliente.findUnique({
      where: {
        id,
      },
    });
    if (!ClientExists) {
      throw new AppError("Cliente não existe para deletar!");
    }
    await prisma.cliente.delete({
      where: {
        id,
      },
    });
    return ClientExists;
  }
}
