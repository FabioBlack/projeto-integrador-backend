import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produto } from './entities/produto.entity';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto)
    private readonly produtoRepository: Repository<Produto>,
  ) {}

  create(createProdutoDto: CreateProdutoDto) {
    return this.produtoRepository.save(createProdutoDto);
  }

  findAll() {
    return this.produtoRepository.find({
      relations: ['fornecedor', 'associacao'],
    });
  }

  findOne(id: number) {
    return this.produtoRepository.findOne({
      where: { id },
      relations: ['fornecedor', 'associacao'],
    });
  }

  update(id: number, updateProdutoDto: UpdateProdutoDto) {
    return this.produtoRepository.update(id, updateProdutoDto);
  }

  remove(id: number) {
    return this.produtoRepository.delete(id);
  }

  async findByFornecedor(id: number) {
    return this.produtoRepository.find({
      where: { fornecedor: { id } },
      relations: ['fornecedor', 'associacao'],
    });
  }
}
