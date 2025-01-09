import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { HttpException, HttpStatus } from '@nestjs/common';
import { ClassService } from './class.service';
import { Class } from 'src/entity/class.entity';
import { UseGuards } from '@nestjs/common';
import { Roles } from '../common/decorators/roles.decorator';
import { RoleGuard } from '../common/guards/roles.guard';

@Resolver(() => Class)
@UseGuards(RoleGuard)
export class ClassResolver {
  constructor(private readonly classService: ClassService) {}

  @Query(() => [Class])
  @Roles('admin', 'principal', 'teacher')
  async getAllClasses(): Promise<Class[]> {
    return this.classService.getAllClasses();
  }

  @Query(() => Class)
  @Roles('admin', 'principal', 'teacher')
  async getClassById(
    @Args('id', { type: () => ID }) id: number,
  ): Promise<Class> {
    const cls = await this.classService.getClassById(id);
    if (!cls) {
      throw new HttpException('Class not found', HttpStatus.NOT_FOUND);
    }
    return cls;
  }

  @Mutation(() => Class)
  @Roles('admin', 'principal')
  async createClass(
    @Args('className', { type: () => String }) className: string,
  ): Promise<Class> {
    return this.classService.createClass({ className });
  }

  @Mutation(() => Class)
  @Roles('admin', 'principal')
  async updateClass(
    @Args('id', { type: () => ID }) id: number,
    @Args('className', { type: () => String }) className: string,
  ): Promise<Class> {
    return this.classService.updateClass(id, { className });
  }

  @Mutation(() => Boolean)
  @Roles('admin')
  async deleteClass(@Args('id') id: number) {
    try {
      await this.classService.deleteClass(id);
      return true;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
