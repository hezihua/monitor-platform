import { Test, TestingModule } from '@nestjs/testing';
import { ErrorInfoService } from './error-info.service';

describe('ErrorInfoService', () => {
  let service: ErrorInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ErrorInfoService],
    }).compile();

    service = module.get<ErrorInfoService>(ErrorInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
