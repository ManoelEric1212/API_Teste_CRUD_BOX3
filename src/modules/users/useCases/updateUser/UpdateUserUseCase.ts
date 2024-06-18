import { Usuario } from "@prisma/client";
import { UpdateUserDTO } from "../../dtos/UpdateUserDTO";
import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/AppError";

export class UpdateUserUseCase {
  async execute({
    id,
    categoria,
    cpf,
    email,
    nome,
    status,
    telefone,
  }: UpdateUserDTO): Promise<Usuario> {
    // Verificar se existe usuario com o id mencionado
    const userExists = await prisma.usuario.findUnique({
      where: {
        id: id,
      },
    });
    if (!userExists) {
      throw new AppError("Id do usuário não existe");
    }
    const new_Movie = await prisma.usuario.update({
      where: {
        id: id,
      },
      data: {
        categoria,
        cpf,
        email,
        nome,
        status,
        telefone,
      },
    });
    return new_Movie;
  }
}
