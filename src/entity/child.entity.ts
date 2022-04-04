import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Parent } from '../parent/parent.entity';

@Entity()
export class Child {
  @PrimaryGeneratedColumn()
  child_id: number;

  @Column()
  year: YearOfStudy;

  @ManyToOne(() => Parent, (parent) => parent.parent_id)
  parent: Parent;
}
