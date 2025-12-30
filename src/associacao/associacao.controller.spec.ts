import { Test, TestingModule } from '@nestjs/testing';
import { AssociacaoController } from './associacao.controller';
import { AssociacaoService } from './associacao.service';

describe('AssociacaoController', () => {
  let controller: AssociacaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssociacaoController],
      providers: [AssociacaoService],
    }).compile();

    controller = module.get<AssociacaoController>(AssociacaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
