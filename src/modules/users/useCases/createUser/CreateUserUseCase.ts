import { Usuario } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";

export class CreateUserUseCase {
  async execute({
    nome,
    email,
    cpf,
    status,
    telefone,
    categoria,
  }: CreateUserDTO): Promise<Usuario> {
    // Verifica se o usuário já existe
    const userAlreadyExists = await prisma.usuario.findUnique({
      where: {
        cpf: cpf,
      },
    });
    if (userAlreadyExists) {
      // Erro
      throw new AppError("Usuário já existente!");
    }
    // Cria o user
    const user = await prisma.usuario.create({
      data: {
        nome,
        email,
        cpf,
        categoria,
        status,
        telefone,
      },
    });
    return user;
  }
}
