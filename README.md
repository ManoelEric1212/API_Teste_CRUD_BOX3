## API para utilização no Teste de aptidão BOX3 para estagiários

A API trata-se de um CRUD, entre as entidades Usuário, Cliente, Cargo e Tarefa.

## Para rodar o projeto 

```
npm i
npx prisma migrate dev --name nome_migracao
npm run dev 
```

O projeto rodará na porta setada, por default está a porta 3333. Além disso, há uma documentação na rota /api-docs.
