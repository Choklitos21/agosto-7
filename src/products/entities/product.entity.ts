import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', { unique: true })
  title: string;

  @Column({ nullable: true, unique: true } )
  description: string

  @Column('int', {default: 0, unique: true})
  stocks: number

  @Column("simple-array")
  size: string[]

  @Column('text', { unique: true })
  gender: string;

  @Column('int', { unique: true })
  price: number;

}