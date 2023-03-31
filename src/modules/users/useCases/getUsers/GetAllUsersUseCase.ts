import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/AppError";

export class GetAllUsersUseCase {
  async execute(): Promise<User[]>{
    const users = await prisma.user.findMany();
    if(!users.length){
      throw new AppError("Cannot find users in database !",204)
    }
    return users;
  }
}