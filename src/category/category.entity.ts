import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
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
}
