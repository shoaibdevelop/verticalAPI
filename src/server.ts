import express from 'express';
import cors from 'cors'
import { apiRouter } from './router';

const useMiddlewares = (server: express.Application) => {
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));
  server.use(cors())
};

const createServer = () => {
  const server = express();
  useMiddlewares(server);
  server.use('/api', apiRouter);
  return server;
};

export const app = createServer();
