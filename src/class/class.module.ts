import { Module } from '@nestjs/common';
import { ClassService } from './class.service';
import { ClassResolver } from './classResolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Class } from 'src/entity/class.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Class])],
  providers: [ClassService, ClassResolver],
})
export class ClassModule {}
