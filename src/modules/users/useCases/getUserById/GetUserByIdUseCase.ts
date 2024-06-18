import { Usuario } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetUserByIdUseCase {
  async execute(usuarioId: string): Promise<Usuario> {
    const usuario = await prisma.usuario.findUnique({
      where: {
        id: usuarioId,
      },
    });
    if (!usuario) {
      throw new Error("usuário não encontrado");
    }
    return usuario;
  }
}
