import { Test, TestingModule } from '@nestjs/testing';
import { ErrorInfoController } from './error-info.controller';
import { ErrorInfoService } from './error-info.service';

describe('ErrorInfoController', () => {
  let controller: ErrorInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ErrorInfoController],
      providers: [ErrorInfoService],
    }).compile();

    controller = module.get<ErrorInfoController>(ErrorInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
