import { Injectable } from '@nestjs/common';
import { CreateAssociacaoDto } from './dto/create-associacao.dto';
import { UpdateAssociacaoDto } from './dto/update-associacao.dto';

@Injectable()
export class AssociacaoService {
  create(createAssociacaoDto: CreateAssociacaoDto) {
    return 'This action adds a new associacao';
  }

  findAll() {
    return `This action returns all associacao`;
  }

  findOne(id: number) {
    return `This action returns a #${id} associacao`;
  }

  update(id: number, updateAssociacaoDto: UpdateAssociacaoDto) {
    return `This action updates a #${id} associacao`;
  }

  remove(id: number) {
    return `This action removes a #${id} associacao`;
  }
}
