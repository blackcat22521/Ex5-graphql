import { IsNotEmpty, IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';
@InputType()
export class UpdateStudentDto {
  @Field()
  @IsNotEmpty({ message: 'studentName is required.' })
  @IsString({ message: 'studentName must be a string.' })
  studentName: string;
}
