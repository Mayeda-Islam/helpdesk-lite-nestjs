import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class RequestLoggerMiddleware implements NestMiddleware {
   use(req: Request, res: Response, next: NextFunction) {
    console.log(`request: ${req.method} ${req.originalUrl}`); // Log the request method and URL,
    next();
  }
}
