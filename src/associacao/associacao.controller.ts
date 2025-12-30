import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AssociacaoService } from './associacao.service';
import { CreateAssociacaoDto } from './dto/create-associacao.dto';
import { UpdateAssociacaoDto } from './dto/update-associacao.dto';

@Controller('associacao')
export class AssociacaoController {
  constructor(private readonly associacaoService: AssociacaoService) {}

  @Post()
  create(@Body() createAssociacaoDto: CreateAssociacaoDto) {
    return this.associacaoService.create(createAssociacaoDto);
  }

  @Get()
  findAll() {
    return this.associacaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.associacaoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAssociacaoDto: UpdateAssociacaoDto) {
    return this.associacaoService.update(+id, updateAssociacaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.associacaoService.remove(+id);
  }
}
