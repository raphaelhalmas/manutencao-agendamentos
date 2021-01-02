import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';

import routes from './routes';
import ResponseStatusException from './errors/ResponseStatusException';

import createConnection from './database';

const app = express();

const configureExpress = () => {
  app.use(express.json());
  app.use('/', routes);

  app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof ResponseStatusException) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    console.error(error);

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  });

  return app;
};
  
export default async () => {
  const app = configureExpress();
  await createConnection();
  return app;
};