import { Module } from '@nestjs/common';
import { AssociacaoService } from './associacao.service';
import { AssociacaoController } from './associacao.controller';

@Module({
  controllers: [AssociacaoController],
  providers: [AssociacaoService],
})
export class AssociacaoModule {}
