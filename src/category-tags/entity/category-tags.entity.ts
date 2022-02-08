import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CategoryTags {
  @PrimaryGeneratedColumn()
  categoryId: number;

  @Column()
  tagsId: number;

  @Column({ default: 0 })
  counter: number;
}
