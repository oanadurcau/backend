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

  async findOne(email: string): Promise<Trainer | undefined> {
    const findByEmail = this.trainerRepository.findOne({
      select: ['trainer_id'],
      where: { email },
    });
    return findByEmail;
  }

  async createTrainer(trainerDto: TrainerDto) {
    const findByEmail = await this.findOne(trainerDto.email);
    if (findByEmail != null) throw new Error('This email is already taken');

    const username = trainerDto.username;
    const findByUsername = this.userRepository.findOne({
      select: ['user_id'],
      where: { username },
    });

    if (findByUsername != null)
      throw new Error('This username is already taken');

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
