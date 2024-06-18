import { Cargo } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateOfficeDTO } from "../../dtos/CreateOfficeDTO";

export class CreateOfficeUseCase {
  async execute({ descricao }: CreateOfficeDTO): Promise<Cargo> {
    const cargoAlreadyExists = await prisma.cargo.findFirst({
      where: {
        descricao: descricao,
      },
    });
    if (cargoAlreadyExists) {
      throw new AppError("Cargo já existente!");
    }
    const office = await prisma.cargo.create({
      data: {
        descricao,
      },
    });
    return office;
  }
}
