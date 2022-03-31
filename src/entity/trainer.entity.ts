import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, Column } from "typeorm";
import { User } from './user.entity';

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

}
