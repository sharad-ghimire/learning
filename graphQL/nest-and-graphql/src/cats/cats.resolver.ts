import {
  Resolver,
  Query,
  Args,
  ResolveProperty,
  Parent,
} from '@nestjs/graphql';

@Resolver()
export class CatsResolver {
  //   constructor(
  //     private readonly authorsService: AuthorsService,
  //     private readonly postService: PostsService,
  //   ) {}

  @Query(() => String)
  async hello() {
    return 'hello';
  }
}
