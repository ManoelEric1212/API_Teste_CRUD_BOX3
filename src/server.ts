import "express-async-errors";
import express, { NextFunction, Request, Response } from 'express';
import { routes } from './routes';
import { AppError } from "./errors/AppError";
const app = express();
import swaggerUI from "swagger-ui-express";
import swaggerDocument from "../swagger.json"

app.use(express.json()); //cors
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))
app.use(routes);
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if(err instanceof AppError){
    return response.status(err.statusCode).json({
      status: "error",
      message: err.message
    });
  }
  return response.status(500).json({
    status: "error",
    message: `Internal server - ${err.message}`
  })
})
app.listen(3333, () => console.log("Servidor online na porta 3333"))