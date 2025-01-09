import { ExceptionFilter } from '@nestjs/common';
import { ErrorResponse } from '../errors/ErrorResponse';
export declare class GraphqlExceptionFilter implements ExceptionFilter {
    catch(exception: any): ErrorResponse;
}
