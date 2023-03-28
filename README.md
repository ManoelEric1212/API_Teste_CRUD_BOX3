# CRIANDO API REST SIMPLES COM PRISMA (FINS DIDÁTICOS)
Criação de uma API com prisma afim de aprender um pouco mais sobre a lib e aprofundar os conhecimentos no Back-End com NodeJS.
## Setup inicial de configurações
- Instalar dependências:

```
npm i prisma ts-node-dev typescript @types/express -D
npm i @prisma/client express
```

- Adicionar scripts de "dev"
```js

  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "ts-node-dev --exit-child --transpile-only --ignore-watch node_modules src/server.ts"
  }
  
```

- Criar o arquivo tsconfig.json
Consultando a documentação do Prisma em [Setup projeto prisma](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres),
observa-se que é necessário apenas rodar o comando 
```
npx tsc init
```


-Adicionar o prisma

```
npx prisma init
```
Next steps:
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.
3. Run prisma db pull to turn your database schema into a Prisma schema.
4. Run prisma generate to generate the Prisma Client. You can then start querying your database.
## Criando modelos no Prisma

### Model comum
- Exemplo:
```js
model User {
  id String @id @default(uuid())
  email String @unique
  name String
  created_at DateTime @default(now())
  updated_at DateTime @updatedAt

  @@map("users")
}
```

## Gerando os modelos para o banco
- Necessário fazer uso das migrações
```
npx prisma migrate dev --name init
```

- Para acompanhar o prisma studio 

```
npx prisma studio
```

## Estruturação do Projeto

![fig1](https://user-images.githubusercontent.com/35776840/228101741-eeb97d90-d951-4f5f-861d-9b1137daf543.png)

- modules/users/dtos/useCase
- dtos (Tipagens do Data Transfer Objects)
- UseCase: 

Para esse tipo de estrutura de projeto, utiliza-se a validação de informações com DTO's bem como caso de usos específico, como por exemplo a criação de um caso de uso CreateUser, atentando para validação da existência ou não de um usuário com as mesmas informações email.

```js

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

```

- Criação do Controller e das Rotas

Criar o controller com a utilização da lib express e validação do corpo.

```js
import {Request, Response} from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
export class CreateUserController {
  async handle(req: Request, res: Response){
    const {name, email} = req.body;
    // Instanciando o caso de uso do create user
    const createUserCase = new CreateUserUseCase();
    // Armazenar resultado executando o caso de uso
    const result = await createUserCase.execute({name, email});
    return res.status(201).json(result);
  }
}
```

- Criação do Routes

```js
import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";

// Instanciando o controller
const createUserController = new CreateUserController();
// Instanciando o Router
const userRoutes = Router();
// Criando o Post
userRoutes.post("/", createUserController.handle);

export {userRoutes};
```
