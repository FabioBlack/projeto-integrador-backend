import { Test, TestingModule } from '@nestjs/testing';
import { AssociacaoService } from './associacao.service';

describe('AssociacaoService', () => {
  let service: AssociacaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssociacaoService],
    }).compile();

    service = module.get<AssociacaoService>(AssociacaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
