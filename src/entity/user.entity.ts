import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  type: number;

  constructor(username: string, password: string, type: number) {
    this.username = username;
    this.password = password;
    this.type = type;
  }
}
