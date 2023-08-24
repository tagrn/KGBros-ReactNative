import { Logger } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export function globalMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  Logger.log('Lifecycle Test: Step 2.1 - Global Middleware');
  next();
}
