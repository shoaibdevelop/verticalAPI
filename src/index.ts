import 'reflect-metadata';
import config from './config';
import { connection } from './db/connection';
import { app } from './server';

(async () => {
  await connection;
  app.listen(config.server.port, () => {
    console.log('Server started on port: ' + config.server.port);
  });
})();
