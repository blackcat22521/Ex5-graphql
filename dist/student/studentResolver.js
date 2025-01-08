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
exports.StudentResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const student_service_1 = require("./student.service");
const student_entity_1 = require("../entity/student.entity");
let StudentResolver = class StudentResolver {
    constructor(studentService) {
        this.studentService = studentService;
    }
    getAllStudents() {
        return this.studentService.getAllStudents();
    }
    getStudentById(id) {
        return this.studentService.getStudentById(id);
    }
    async createStudent(studentName, className) {
        return this.studentService.create({ studentName, className });
    }
    async updateStudent(id, studentName) {
        return this.studentService.updateStudent(id, { studentName });
    }
    async deleteStudent(id) {
        await this.studentService.deleteStudent(id);
        return 'Student deleted successfully';
    }
};
exports.StudentResolver = StudentResolver;
__decorate([
    (0, graphql_1.Query)(() => [student_entity_1.Student]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StudentResolver.prototype, "getAllStudents", null);
__decorate([
    (0, graphql_1.Query)(() => student_entity_1.Student),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], StudentResolver.prototype, "getStudentById", null);
__decorate([
    (0, graphql_1.Mutation)(() => student_entity_1.Student),
    __param(0, (0, graphql_1.Args)('studentName')),
    __param(1, (0, graphql_1.Args)('className')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], StudentResolver.prototype, "createStudent", null);
__decorate([
    (0, graphql_1.Mutation)(() => student_entity_1.Student),
    __param(0, (0, graphql_1.Args)('id')),
    __param(1, (0, graphql_1.Args)('studentName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], StudentResolver.prototype, "updateStudent", null);
__decorate([
    (0, graphql_1.Mutation)(() => String),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StudentResolver.prototype, "deleteStudent", null);
exports.StudentResolver = StudentResolver = __decorate([
    (0, graphql_1.Resolver)(() => student_entity_1.Student),
    __metadata("design:paramtypes", [student_service_1.StudentService])
], StudentResolver);
//# sourceMappingURL=studentResolver.js.map