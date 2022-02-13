import { Product } from 'src/product/entities/product.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Image {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  public_id: number;

  @Column()
  url: string;

  @ManyToOne((type) => Product, (product) => product.images)
  product: Product;

  // @ManyToOne(()=>Product, product=>product.images)
  // productId:Product;

  @Column()
  created: Date;

  @Column()
  updated: Date;
}
