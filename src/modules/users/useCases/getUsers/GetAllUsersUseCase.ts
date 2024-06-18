import { Usuario } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/AppError";

export class GetAllUsersUseCase {
  async execute(): Promise<Usuario[]> {
    const users = await prisma.usuario.findMany({});
    if (!users.length) {
      throw new AppError("Não existem usuários na base de dados !", 204);
    }
    return users;
  }
}
