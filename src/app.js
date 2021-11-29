import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

import ccrequestRouter from './routes/apirequest_routes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/cross_commerce/', ccrequestRouter);
  }
}

export default new App().app;
