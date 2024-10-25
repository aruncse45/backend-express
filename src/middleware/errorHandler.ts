import { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/apiError.js';
import logger from '../utils/logger.js';

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void => {
  logger.error(err);

  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
    return;
  }

  res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
};
