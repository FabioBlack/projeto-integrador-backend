import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Produto } from '../../produto/entities/produto.entity';

@Entity()
export class Associacao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;

  @OneToMany(() => Produto, produto => produto.associacao)
  produtos: Produto[];
}
