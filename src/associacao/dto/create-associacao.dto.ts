import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAssociacaoDto {
  @ApiProperty({ example: 'Associação Central' })
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty({ example: 'Águas Lindas' })
  @IsString()
  @IsNotEmpty()
  cidade: string;

  @ApiProperty({ example: 'GO' })
  @IsString()
  @IsNotEmpty()
  estado: string;
}
