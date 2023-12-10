import { Test, TestingModule } from '@nestjs/testing';
import { ControllercrudController } from './controllercrud.controller';

describe('ControllercrudController', () => {
  let controller: ControllercrudController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ControllercrudController],
    }).compile();

    controller = module.get<ControllercrudController>(ControllercrudController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
