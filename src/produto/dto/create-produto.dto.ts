import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProdutoDto {
  @ApiProperty({ example: 'Camiseta' })
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty({ example: 49.90 })
  @IsNumber()
  preco: number;

  @ApiProperty({ example: 'Camiseta de algodão', required: false })
  @IsString()
  @IsOptional()
  descricao?: string;

  @ApiProperty({ example: 1 })
  @IsNumber()
  fornecedorId: number;

  @ApiProperty({ example: 1 })
  @IsNumber()
  associacaoId: number;
}
