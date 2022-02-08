import { Test, TestingModule } from '@nestjs/testing';
import { CategoryTagsService } from './category-tags.service';

describe('CategoryTagsService', () => {
  let service: CategoryTagsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoryTagsService],
    }).compile();

    service = module.get<CategoryTagsService>(CategoryTagsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
