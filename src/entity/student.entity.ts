import { Field, ObjectType } from '@nestjs/graphql';
import { Class } from './class.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Student {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  studentName: string;

  @Field(() => Class)
  @ManyToOne(() => Class, (cls) => cls.students, { onDelete: 'CASCADE' })
  class: Class;
}
