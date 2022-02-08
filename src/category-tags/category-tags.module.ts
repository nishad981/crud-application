import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryTagsController } from './category-tags.controller';
import { CategoryTags } from './entity/category-tags.entity';
import { CategoryTagsService } from './category-tags.service';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryTags])],
  controllers: [CategoryTagsController],
  providers: [CategoryTagsService],
})
export class CategoryTagsModule {}
