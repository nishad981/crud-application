import { Category } from 'src/category/entities/category.entity';
import { Product } from 'src/product/entities/product.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Tags {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @ManyToMany((type) => Category, (category) => category.tags)
  @JoinTable()
  categories: Category[];

  @ManyToMany(() => Product, (product) => product.tags)
  @JoinTable()
  products: Product[];
}
