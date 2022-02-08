import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product_tags {
  @PrimaryGeneratedColumn()
  productId: number;

  @Column()
  tagsId: number;
}
