import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Fornecedor } from '../../fornecedor/entities/fornecedor.entity';
import { Associacao } from '../../associacao/entities/associacao.entity';

@Entity()
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column('decimal')
  preco: number;

  @Column({ nullable: true })
  descricao?: string;

  @ManyToOne(() => Fornecedor, fornecedor => fornecedor.produtos, { eager: true })
  fornecedor: Fornecedor;

  @ManyToOne(() => Associacao, associacao => associacao.produtos, { eager: true })
  associacao: Associacao;
}
