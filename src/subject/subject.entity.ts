import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Subject {
  @PrimaryGeneratedColumn()
  subject_id: number;

  @Column({ unique: true })
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
