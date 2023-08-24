import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  Logger,
} from '@nestjs/common';

@Injectable()
export class ControllerPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    Logger.log('Lifecycle Test: Step 5.2 - Controller Pipe');
    return value;
  }
}

@Injectable()
export class RoutePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    Logger.log('Lifecycle Test: Step 5.3 - Route Pipe');
    return value;
  }
}

@Injectable()
export class ParameterPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    Logger.log('Lifecycle Test: Step 5.4 - Parameter Pipe');
    return value;
  }
}
