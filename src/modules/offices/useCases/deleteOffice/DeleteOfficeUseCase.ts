import { Cargo } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { DeleteOfficeDTO } from "../../dtos/DeleteOfficeDTO";

export class DeleteOfficeUseCase {
  async execute({ id }: DeleteOfficeDTO): Promise<Cargo> {
    const CargoExists = await prisma.cargo.findUnique({
      where: {
        id,
      },
    });
    if (!CargoExists) {
      throw new AppError("Cargo não existe para deletar!");
    }
    await prisma.cargo.delete({
      where: {
        id,
      },
    });
    return CargoExists;
  }
}
