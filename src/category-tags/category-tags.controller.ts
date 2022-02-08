import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CategoryTagsDto } from './dto/category-tags.dto';
import { CategoryTags } from './entity/category-tags.entity';
import { CategoryTagsService } from './category-tags.service';

@Controller('category-tags')
export class CategoryTagsController {
  constructor(private readonly categoryTagsService: CategoryTagsService) {}

  @Post()
  createCategoryTags(
    @Body() categoryTagsDto: CategoryTagsDto,
  ): Promise<CategoryTags> {
    return this.categoryTagsService.create(categoryTagsDto);
  }

  @Get()
  readAll(): Promise<CategoryTags[]> {
    return this.categoryTagsService.readAll();
  }

  @Get(':id')
  readOne(@Param('id') id: string) {
    return this.categoryTagsService.readOne(Number(id));
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() categoryTagsDto: CategoryTagsDto,
  ): Promise<CategoryTags> {
    return this.categoryTagsService.update(Number(id), categoryTagsDto);
  }

  @Delete()
  delete() {}
}
