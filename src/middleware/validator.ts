// import { Request, Response, NextFunction } from 'express';
// import { body, validationResult } from 'express-validator';
// import { AppError } from '../utils/apiError.js';
//
// export const validateTodo = [
//   body('title').trim().notEmpty().withMessage('Title is required'),
//   body('completed').optional().isBoolean(),
//   (req: Request, _res: Response, next: NextFunction): void => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       throw new AppError(errors.array()[0].msg, 400);
//     }
//     next();
//   },
// ];
