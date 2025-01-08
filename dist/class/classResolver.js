"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_service_1 = require("./class.service");
const class_entity_1 = require("../entity/class.entity");
let ClassResolver = class ClassResolver {
    constructor(classService) {
        this.classService = classService;
    }
    getAllClasses() {
        return this.classService.getAllClasses();
    }
    getClassById(id) {
        return this.classService.getClassById(id);
    }
    createClass(className) {
        return this.classService.createClass({ className });
    }
    async updateClass(id, className) {
        return this.classService.updateClass(id, { className });
    }
    async deleteClass(id) {
        await this.classService.deleteClass(id);
        return 'Class deleted successfully';
    }
};
exports.ClassResolver = ClassResolver;
__decorate([
    (0, graphql_1.Query)(() => [class_entity_1.Class]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ClassResolver.prototype, "getAllClasses", null);
__decorate([
    (0, graphql_1.Query)(() => class_entity_1.Class),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ClassResolver.prototype, "getClassById", null);
__decorate([
    (0, graphql_1.Mutation)(() => class_entity_1.Class),
    __param(0, (0, graphql_1.Args)('className')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClassResolver.prototype, "createClass", null);
__decorate([
    (0, graphql_1.Mutation)(() => class_entity_1.Class),
    __param(0, (0, graphql_1.Args)('id')),
    __param(1, (0, graphql_1.Args)('className')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], ClassResolver.prototype, "updateClass", null);
__decorate([
    (0, graphql_1.Mutation)(() => String),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ClassResolver.prototype, "deleteClass", null);
exports.ClassResolver = ClassResolver = __decorate([
    (0, graphql_1.Resolver)(() => class_entity_1.Class),
    __metadata("design:paramtypes", [class_service_1.ClassService])
], ClassResolver);
//# sourceMappingURL=classResolver.js.map