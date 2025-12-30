import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Produto } from './produto/entities/produto.entity';
import { Fornecedor } from './fornecedor/entities/fornecedor.entity';
import { Associacao } from './associacao/entities/associacao.entity';

import { ProdutoModule } from './produto/produto.module';
import { FornecedorModule } from './fornecedor/fornecedor.module';
import { AssociacaoModule } from './associacao/associacao.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [Produto, Fornecedor, Associacao],
      synchronize: true,
    }),
    ProdutoModule,
    FornecedorModule,
    AssociacaoModule,
  ],
})
export class AppModule {}
