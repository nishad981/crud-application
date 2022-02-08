import { Test, TestingModule } from '@nestjs/testing';
import { CategoryTagsController } from './category-tags.controller';

describe('CategoryTagsController', () => {
  let controller: CategoryTagsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoryTagsController],
    }).compile();

    controller = module.get<CategoryTagsController>(CategoryTagsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
