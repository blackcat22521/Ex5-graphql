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
const createStudentDto_1 = require("./dto/createStudentDto");
const updateStudentDto_1 = require("./dto/updateStudentDto");
const common_1 = require("@nestjs/common");
const roles_decorator_1 = require("../common/decorators/roles.decorator");
const roles_guard_1 = require("../common/guards/roles.guard");
let StudentResolver = class StudentResolver {
    constructor(studentService) {
        this.studentService = studentService;
    }
    async getAllStudents() {
        return this.studentService.getAllStudents();
    }
    async getStudentById(id) {
        const student = await this.studentService.getStudentById(id);
        if (!student) {
            throw new common_1.HttpException('Student not found', common_1.HttpStatus.NOT_FOUND);
        }
        return student;
    }
    async createStudent(createStudentDto) {
        try {
            return await this.studentService.create(createStudentDto);
        }
        catch (error) {
            if (error instanceof common_1.BadRequestException) {
                throw error;
            }
            throw new Error('Failed to create student');
        }
    }
    async updateStudent(id, updateStudentDto) {
        try {
            return this.studentService.updateStudent(id, updateStudentDto);
        }
        catch (error) {
            throw new common_1.HttpException(error.message || 'Failed to update student', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async deleteStudent(id) {
        try {
            const result = await this.studentService.deleteStudent(id);
            return result
                ? `Student with ID ${id} deleted successfully`
                : `Failed to delete student with ID ${id}`;
        }
        catch (error) {
            throw new common_1.HttpException(error.message || 'Failed to delete student', common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.StudentResolver = StudentResolver;
__decorate([
    (0, graphql_1.Query)(() => [student_entity_1.Student]),
    (0, roles_decorator_1.Roles)('admin', 'principal', 'teacher'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StudentResolver.prototype, "getAllStudents", null);
__decorate([
    (0, graphql_1.Query)(() => student_entity_1.Student),
    (0, roles_decorator_1.Roles)('admin', 'principal', 'teacher'),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StudentResolver.prototype, "getStudentById", null);
__decorate([
    (0, graphql_1.Mutation)(() => student_entity_1.Student),
    (0, roles_decorator_1.Roles)('admin', 'teacher'),
    __param(0, (0, graphql_1.Args)('createStudentDto')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createStudentDto_1.CreateStudentDto]),
    __metadata("design:returntype", Promise)
], StudentResolver.prototype, "createStudent", null);
__decorate([
    (0, graphql_1.Mutation)(() => student_entity_1.Student),
    (0, roles_decorator_1.Roles)('admin', 'teacher'),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __param(1, (0, graphql_1.Args)('updateStudentDto')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, updateStudentDto_1.UpdateStudentDto]),
    __metadata("design:returntype", Promise)
], StudentResolver.prototype, "updateStudent", null);
__decorate([
    (0, graphql_1.Mutation)(() => String, { name: 'deleteStudent' }),
    (0, roles_decorator_1.Roles)('admin'),
    __param(0, (0, graphql_1.Args)('id', { type: () => Number })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StudentResolver.prototype, "deleteStudent", null);
exports.StudentResolver = StudentResolver = __decorate([
    (0, graphql_1.Resolver)(() => student_entity_1.Student),
    (0, common_1.UseGuards)(roles_guard_1.RoleGuard),
    __metadata("design:paramtypes", [student_service_1.StudentService])
], StudentResolver);
//# sourceMappingURL=studentResolver.js.map