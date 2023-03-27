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
-Exemplo:
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

## gerando os modelos para o banco
- Necessário fazer uso das migrações
```
npx prisma migrate dev --name init
```

-Para acompanhar o prisma studio 

```
npx prisma studio
```
