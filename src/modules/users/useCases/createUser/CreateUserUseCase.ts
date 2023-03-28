import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";

export class CreateUserUseCase {
  async execute({name, email}: CreateUserDTO): Promise<User>{
  // Verifica se o usuário já existe
  const userAlreadyExists = await prisma.user.findUnique({
    where : {
      email: email
    }
  });
  if(userAlreadyExists){
    // Erro
  }
  // Cria o user
  const user = await prisma.user.create({
    data:{
      name,email
    }
  });
  return user;  
  }
}