import { Cargo } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/AppError";

export class GetAllOfficesUseCase {
  async execute(): Promise<Cargo[]> {
    const cargos = await prisma.cargo.findMany({});
    if (!cargos.length) {
      throw new AppError("Não existem cargos na base de dados !", 204);
    }
    return cargos;
  }
}
