import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Brand')
export class Brand {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  country: string;
}
