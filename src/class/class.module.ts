import { Module } from '@nestjs/common';
import { ClassService } from './class.service';
import { ClassResolver } from './classResolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Class } from 'src/entity/class.entity';
import { Student } from 'src/entity/student.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Class, Student])],
  providers: [ClassService, ClassResolver],
})
export class ClassModule {}
