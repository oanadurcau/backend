import {
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  Column,
} from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Trainer {
  @PrimaryGeneratedColumn()
  trainer_id: number;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @Column()
  email: string;

  @Column()
  phone_number: string;

  constructor(user: User, email: string, phone_number: string) {
    this.user = user;
    this.email = email;
    this.phone_number = phone_number;
  }
}
