import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { StudentService } from './student.service';
import { Student } from 'src/entity/student.entity';

@Resolver(() => Student)
export class StudentResolver {
  constructor(private readonly studentService: StudentService) {}

  @Query(() => [Student])
  getAllStudents() {
    return this.studentService.getAllStudents();
  }

  @Query(() => Student)
  getStudentById(@Args('id') id: number) {
    return this.studentService.getStudentById(id);
  }

  @Mutation(() => Student)
  async createStudent(
    @Args('studentName') studentName: string,
    @Args('className') className: string,
  ) {
    return this.studentService.create({ studentName, className });
  }

  @Mutation(() => Student)
  async updateStudent(
    @Args('id') id: number,
    @Args('studentName') studentName: string,
  ) {
    return this.studentService.updateStudent(id, { studentName });
  }

  @Mutation(() => String)
  async deleteStudent(@Args('id') id: number): Promise<string> {
    await this.studentService.deleteStudent(id);
    return 'Student deleted successfully';
  }
}
