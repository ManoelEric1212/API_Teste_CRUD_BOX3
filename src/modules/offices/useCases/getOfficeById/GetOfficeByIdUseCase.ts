import { Cargo } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetOfficeByIdUseCase {
  async execute(officeId: string): Promise<Cargo> {
    const cargo = await prisma.cargo.findUnique({
      where: {
        id: officeId,
      },
    });
    if (!cargo) {
      throw new Error("Cargo não encontrado");
    }
    return cargo;
  }
}
