import 'reflect-metadata';

import express from 'express';
import routes from './routes';

import createConnection from './database';

const app = express();

const configureExpress = () => {
  app.use(express.json());
  app.use('/', routes);
  return app;
};
  
export default async () => {
  const app = configureExpress();
  await createConnection();
  return app;
};