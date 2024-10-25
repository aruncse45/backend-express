import dotenv from 'dotenv';
import app from './app.js';
import logger from './utils/logger.js';
import { Request, Response } from 'express';

dotenv.config();

const PORT = 3000;

app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});
