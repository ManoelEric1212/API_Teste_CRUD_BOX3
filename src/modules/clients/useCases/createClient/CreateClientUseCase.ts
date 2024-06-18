import { Cliente } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateClientrDTO } from "../../dtos/CreateClientDTO";

export class CreateClientUseCase {
  async execute({ nome, cpf, telefone }: CreateClientrDTO): Promise<Cliente> {
    // Verifica se o cliente já existe
    const clientAlreadyExists = await prisma.cliente.findUnique({
      where: {
        cpf: cpf,
      },
    });
    if (clientAlreadyExists) {
      // Erro
      throw new AppError("Cliente já existente!");
    }
    // Cria o user
    const user = await prisma.cliente.create({
      data: {
        nome,
        cpf,
        telefone,
      },
    });
    return user;
  }
}
