import { Test, TestingModule } from '@nestjs/testing';
import { NishadController } from './nishad.controller';
import { NishadService } from './nishad.service';

describe('NishadController', () => {
  let controller: NishadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NishadController],
      providers: [NishadService],
    }).compile();

    controller = module.get<NishadController>(NishadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
