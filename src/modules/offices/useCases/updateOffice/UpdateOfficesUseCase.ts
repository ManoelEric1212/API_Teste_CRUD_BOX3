import { Cargo } from "@prisma/client";
import { UpdateOfficeDTO } from "../../dtos/UpdateOfficeDTO";
import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/AppError";

export class UpdateOfficeUseCase {
  async execute({ id, descricao }: UpdateOfficeDTO): Promise<Cargo> {
    console.log("id", id);
    const cargoExists = await prisma.cargo.findUnique({
      where: {
        id: id,
      },
    });
    console.log("cargoExists", cargoExists);
    if (!cargoExists) {
      throw new AppError("Id do Cargo não existe");
    }
    const new_Office = await prisma.cargo.update({
      where: {
        id: id,
      },
      data: {
        descricao,
      },
    });
    return new_Office;
  }
}
