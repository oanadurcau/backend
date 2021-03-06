import {
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  Column,
  OneToMany,
} from 'typeorm';
import { User } from '../user/user.entity';
import { Child } from '../entity/child.entity';

@Entity()
export class Parent {
  @PrimaryGeneratedColumn()
  parent_id: number;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @Column()
  email: string;

  @Column()
  phone_number: string;

  @OneToMany(() => Child, (child) => child.child_id)
  children: Child[];

  constructor(user: User, email: string, phone_number: string) {
    this.user = user;
    this.email = email;
    this.phone_number = phone_number;
  }
}
