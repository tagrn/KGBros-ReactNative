import { Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

export function moduleMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  Logger.log('Lifecycle Test: Step 2.2 - Module Middleware');
  next();
}
