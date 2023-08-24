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
export class GlobalInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    Logger.log('Lifecycle Test: Step 4.1 - Pre Global Interceptor');

    return next
      .handle()
      .pipe(
        tap(() =>
          Logger.log('Lifecycle Test: Step 8.3 - Post Global Interceptor'),
        ),
      );
  }
}
