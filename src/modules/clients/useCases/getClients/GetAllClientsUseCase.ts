import { Cliente } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/AppError";

export class GetAllClientsUseCase {
  async execute(): Promise<Cliente[]> {
    const clientes = await prisma.cliente.findMany({});
    if (!clientes.length) {
      throw new AppError("Não existem clientes na base de dados !", 204);
    }
    return clientes;
  }
}
