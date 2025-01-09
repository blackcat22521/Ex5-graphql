import { Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { ErrorResponse } from '../errors/ErrorResponse';
@Catch()
export class GraphqlExceptionFilter implements ExceptionFilter {
  catch(exception: any) {
    if (exception instanceof HttpException) {
      const status = exception.getStatus();
      const response = exception.getResponse() as
        | string
        | { error: string; message: string | string[]; statusCode: number };

      const devMessage =
        typeof response === 'string'
          ? response
          : Array.isArray(response['message'])
            ? response['message'].join(', ')
            : response['message'];

      return new ErrorResponse(
        response['error'] || 'INTERNAL_SERVER_ERROR',
        devMessage || 'An unexpected error occurred.',
        { statusCode: status },
      );
    }

    // For non-HttpException errors
    return new ErrorResponse(
      'INTERNAL_SERVER_ERROR',
      exception.message || 'An unexpected error occurred.',
      { stack: exception.stack },
    );
  }
}
