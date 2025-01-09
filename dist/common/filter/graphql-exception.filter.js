"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphqlExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const ErrorResponse_1 = require("../errors/ErrorResponse");
let GraphqlExceptionFilter = class GraphqlExceptionFilter {
    catch(exception) {
        if (exception instanceof common_1.HttpException) {
            const status = exception.getStatus();
            const response = exception.getResponse();
            const devMessage = typeof response === 'string'
                ? response
                : Array.isArray(response['message'])
                    ? response['message'].join(', ')
                    : response['message'];
            return new ErrorResponse_1.ErrorResponse(response['error'] || 'INTERNAL_SERVER_ERROR', devMessage || 'An unexpected error occurred.', { statusCode: status });
        }
        return new ErrorResponse_1.ErrorResponse('INTERNAL_SERVER_ERROR', exception.message || 'An unexpected error occurred.', { stack: exception.stack });
    }
};
exports.GraphqlExceptionFilter = GraphqlExceptionFilter;
exports.GraphqlExceptionFilter = GraphqlExceptionFilter = __decorate([
    (0, common_1.Catch)()
], GraphqlExceptionFilter);
//# sourceMappingURL=graphql-exception.filter.js.map