import {
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Admin {
  @PrimaryGeneratedColumn()
  admin_id: number;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}
