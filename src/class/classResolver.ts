import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ClassService } from './class.service';
import { Class } from 'src/entity/class.entity';
@Resolver(() => Class)
export class ClassResolver {
  constructor(private readonly classService: ClassService) {}
  @Query(() => [Class])
  getAllClasses() {
    return this.classService.getAllClasses();
  }
  @Query(() => Class)
  getClassById(@Args('id') id: number) {
    return this.classService.getClassById(id);
  }

  @Mutation(() => Class)
  createClass(@Args('className') className: string) {
    return this.classService.createClass({ className });
  }

  @Mutation(() => Class)
  async updateClass(
    @Args('id') id: number,
    @Args('className') className: string,
  ) {
    return this.classService.updateClass(id, { className });
  }

  @Mutation(() => String)
  async deleteClass(@Args('id') id: number): Promise<string> {
    await this.classService.deleteClass(id);
    return 'Class deleted successfully';
  }
}
