import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Product')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  skuNumber: number;

  @Column()
  brandld: number;

  @Column()
  countryOfOrigin: string;

  @Column()
  stateOfOrigin: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  categoryid: number;

  @Column()
  abv: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
