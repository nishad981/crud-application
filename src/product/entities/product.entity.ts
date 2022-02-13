import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Image } from 'src/image/entities/image.entity';
import { Tags } from 'src/tags/entities/tags.entity';
import { Brand } from 'src/brand/entities/brand.entity';

@Entity('Product')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Image, (image) => image.product)
  images: Image[];

  @Column()
  skuNumber: number;

  @ManyToOne(() => Brand, (brand) => brand.products)
  brand: Brand;

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

  @ManyToMany((type) => Tags, (tags) => tags.products)
  tags: Tags[];
}
