import { Tags } from 'src/tags/entities/tags.entity';
import { Column, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  mpath: string;

  @Column()
  parentCategoryId: number;

  @Column()
  userId: number;

  @ManyToMany(() => Tags, (tags) => tags.categories)
  tags: Tags[];
}
