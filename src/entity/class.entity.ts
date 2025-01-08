import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Student } from './student.entity';

@ObjectType()
@Entity()
export class Class {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ unique: true })
  className: string;

  @Field(() => [Student], { nullable: true })
  @OneToMany(() => Student, (student) => student.class)
  students: Student[];
}
