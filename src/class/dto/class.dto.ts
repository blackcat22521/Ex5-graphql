import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class ClassDto {
  @Field()
  @IsNotEmpty({ message: 'className is required.' })
  @IsString({ message: 'className must be a string.' })
  className: string;
}
