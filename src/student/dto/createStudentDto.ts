import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateStudentDto {
  @Field()
  @IsNotEmpty({ message: 'studentName is required.' })
  @IsString({ message: 'studentName must be a string.' })
  studentName: string;

  @Field()
  @IsNotEmpty({ message: 'className is required.' })
  @IsString({ message: 'className must be a string.' })
  className: string;
}
