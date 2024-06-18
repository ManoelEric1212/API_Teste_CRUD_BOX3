import { Usuario } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { DeleteUserDTO } from "../../dtos/DeleteUserDTO";

export class DeleteUserUseCase {
  async execute({ id }: DeleteUserDTO): Promise<Usuario> {
    // Verificar se o Usuário existe
    const UserExists = await prisma.usuario.findUnique({
      where: {
        id,
      },
    });
    if (!UserExists) {
      throw new AppError("Usuário não existe para deletar!");
    }
    await prisma.usuario.delete({
      where: {
        id,
      },
    });
    return UserExists;
  }
}
