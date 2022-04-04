import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, Column } from "typeorm";
import { Child } from './child.entity';
import { Trainer } from './trainer.entity';
import { Subject } from '../subject/subject.entity';

@Entity()
export class PrivateLesson {
  @PrimaryGeneratedColumn()
  private_lesson_id: number;

  @Column()
  date: Date;

  @Column()
  length: number;

  @Column()
  price: number;

  @Column()
  status: PrivateLessonStatus;

  @OneToOne(() => Child)
  @JoinColumn()
  child: Child;

  @OneToOne(() => Trainer)
  @JoinColumn()
  trainer: Trainer;

  @OneToOne(() => Subject)
  @JoinColumn()
  subject: Subject;
}
