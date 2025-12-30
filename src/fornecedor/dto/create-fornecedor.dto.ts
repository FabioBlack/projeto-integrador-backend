import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateFornecedorDto {
  @ApiProperty({ example: 'Fornecedor A' })
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty({ example: '61 99999-0000', required: false })
  @IsString()
  @IsOptional()
  contato?: string;

  @ApiProperty({ example: 'Rua X', required: false })
  @IsString()
  @IsOptional()
  endereco?: string;
}
