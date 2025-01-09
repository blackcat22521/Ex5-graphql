import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { StudentService } from './student.service';
import { Student } from 'src/entity/student.entity';
import { CreateStudentDto } from './dto/createStudentDto';
import { UpdateStudentDto } from './dto/updateStudentDto';
import {
  UseGuards,
  HttpException,
  HttpStatus,
  BadRequestException,
} from '@nestjs/common';
import { Roles } from '../common/decorators/roles.decorator';
import { RoleGuard } from '../common/guards/roles.guard';

@Resolver(() => Student)
@UseGuards(RoleGuard)
export class StudentResolver {
  constructor(private readonly studentService: StudentService) {}

  @Query(() => [Student])
  @Roles('admin', 'principal', 'teacher')
  async getAllStudents(): Promise<Student[]> {
    return this.studentService.getAllStudents();
  }

  @Query(() => Student)
  @Roles('admin', 'principal', 'teacher')
  async getStudentById(
    @Args('id', { type: () => ID }) id: number,
  ): Promise<Student> {
    const student = await this.studentService.getStudentById(id);
    if (!student) {
      throw new HttpException('Student not found', HttpStatus.NOT_FOUND);
    }
    return student;
  }

  @Mutation(() => Student)
  @Roles('admin', 'teacher')
  async createStudent(
    @Args('createStudentDto') createStudentDto: CreateStudentDto,
  ): Promise<Student> {
    try {
      return await this.studentService.create(createStudentDto);
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }

      throw new Error('Failed to create student');
    }
  }

  @Mutation(() => Student)
  @Roles('admin', 'teacher')
  async updateStudent(
    @Args('id', { type: () => ID }) id: number,
    @Args('updateStudentDto') updateStudentDto: UpdateStudentDto,
  ): Promise<Student> {
    try {
      return this.studentService.updateStudent(id, updateStudentDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Mutation(() => String, { name: 'deleteStudent' })
  @Roles('admin')
  async deleteStudent(
    @Args('id', { type: () => Number }) id: number,
  ): Promise<string> {
    try {
      const result = await this.studentService.deleteStudent(id);
      return result
        ? `Student with ID ${id} deleted successfully`
        : `Failed to delete student with ID ${id}`;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
