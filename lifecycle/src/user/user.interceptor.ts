import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class ControllerInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    Logger.log('Lifecycle Test: Step 4.2 - Pre Controller Interceptor');

    return next
      .handle()
      .pipe(
        tap(() =>
          Logger.log('Lifecycle Test: Step 8.2 - Post Controller Interceptor'),
        ),
      );
  }
}

@Injectable()
export class RouteInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    Logger.log('Lifecycle Test: Step 4.3 - Pre Route Interceptor');

    return next
      .handle()
      .pipe(
        tap(() =>
          Logger.log('Lifecycle Test: Step 8.1 - Post Route Interceptor'),
        ),
      );
  }
}
