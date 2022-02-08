import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryTagsDto } from './dto/category-tags.dto';
import { CategoryTags } from './entity/category-tags.entity';

@Injectable()
export class CategoryTagsService {
  constructor(
    @InjectRepository(CategoryTags)
    private readonly categoryTagsRepository: Repository<CategoryTags>,
  ) {}

  create(categoryTagsDto: CategoryTagsDto): Promise<CategoryTags> {
    // const counter: number = 0;
    // const categoryTags = { ...categoryTagsDto, counter };
    return this.categoryTagsRepository.save(
      this.categoryTagsRepository.create(categoryTagsDto),
    );
  }

  async readAll(): Promise<CategoryTags[]> {
    return await this.categoryTagsRepository.find();
  }

  readOne(id: number): Promise<CategoryTags> {
    return this.categoryTagsRepository.findOne(id);
  }

  async update(
    id: number,
    categoryTagsDto: CategoryTagsDto,
  ): Promise<CategoryTags> {
    try {
      const categoryTags = await this.categoryTagsRepository.findOne(id);
      if (!categoryTags) {
        throw 'This category does not exist.';
      }
      //let counter: number = categoryTags.counter;
      categoryTags.counter++;
      //let categoryTagsDtoUpdate = [categoryTagsDto, categoryTags.counter];
      //let categoryTagsDtoUpdate = {...categoryTagsDto, counter++};
      return await this.categoryTagsRepository.save({
        ...categoryTags,
        ...categoryTagsDto,
      });
    } catch (e) {
      return e;
    }
  }
}
