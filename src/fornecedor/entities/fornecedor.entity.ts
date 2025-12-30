import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Produto } from '../../produto/entities/produto.entity';

@Entity()
export class Fornecedor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ nullable: true })
  contato?: string;

  @Column({ nullable: true })
  endereco?: string;

  @OneToMany(() => Produto, produto => produto.fornecedor)
  produtos: Produto[];
}
