import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Trainer } from '../entity/trainer.entity';
import { TrainerDto } from './trainer.dto';
import { User } from '../user/user.entity';
import { UserType } from '../entity/userType';

@Injectable()
export class TrainerService {
  constructor(
    @InjectRepository(Trainer)
    private trainerRepository: Repository<Trainer>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  findAll(): Promise<Trainer[]> {
    return this.trainerRepository.find();
  }

  async createTrainer(trainerDto: TrainerDto) {
    const user = await this.userRepository.save(
      new User(trainerDto.username, trainerDto.password, UserType.TRAINER),
    );
    return this.trainerRepository.save(
      new Trainer(user, trainerDto.email, trainerDto.phoneNumber),
    );
  }

  async remove(id: number): Promise<void> {
    await this.trainerRepository.delete(id);
  }
}
