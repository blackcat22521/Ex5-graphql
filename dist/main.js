"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const graphql_exception_filter_1 = require("./common/filter/graphql-exception.filter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    app.useGlobalFilters(new graphql_exception_filter_1.GraphqlExceptionFilter());
    await app.listen(3000);
    console.log('Server is running on http://localhost:3000');
}
bootstrap();
//# sourceMappingURL=main.js.map