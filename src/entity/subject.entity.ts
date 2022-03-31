import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Subject {
  @PrimaryGeneratedColumn()
  subject_id: number;

  @Column()
  name: string;
}
