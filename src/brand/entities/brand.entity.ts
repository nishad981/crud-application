import { Product } from 'src/product/entities/product.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Brand')
export class Brand {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Product, (product) => product.brand)
  products: Product[];

  @Column()
  name: string;

  @Column()
  country: string;
}
