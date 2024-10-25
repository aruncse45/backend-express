import express, { Express } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import xss from 'xss-clean';
import morgan from 'morgan';
import logger from './utils/logger.js';
import routes from './routes/todoRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';

const app: Express = express();

app.use(helmet());
app.use(cors());
app.use(xss());

app.use(
  morgan('combined', {
    stream: { write: (message: string) => logger.info(message.trim()) },
  }),
);

app.use(express.json());
app.use(`/api/${process.env.API_VERSION || 'v1'}`, routes);
app.use(errorHandler);

export default app;
