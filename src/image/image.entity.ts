import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Image {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  public_id: number;

  @Column()
  url: string;

  @Column()
  productid: number;

  @Column()
  created: Date;

  @Column()
  updated: Date;
}
