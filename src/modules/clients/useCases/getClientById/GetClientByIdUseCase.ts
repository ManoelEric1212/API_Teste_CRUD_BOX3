import { Cliente } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetClientByIdUseCase {
  async execute(clientId: string): Promise<Cliente> {
    console.log("aqui", clientId);
    const cliente = await prisma.cliente.findUnique({
      where: {
        id: clientId,
      },
    });
    console.log("cliente", cliente);
    if (!cliente) {
      throw new Error("Cliente não encontrado");
    }
    return cliente;
  }
}
