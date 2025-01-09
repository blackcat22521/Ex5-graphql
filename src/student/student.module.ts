import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentResolver } from './studentResolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from 'src/entity/student.entity';
import { Class } from 'src/entity/class.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Student, Class])],
  providers: [StudentService, StudentResolver],
  exports: [TypeOrmModule],
})
export class StudentModule {}
