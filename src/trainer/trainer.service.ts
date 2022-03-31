import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Trainer } from '../entity/trainer.entity';

@Injectable()
export class TrainerService {
  constructor(
    @InjectRepository(Trainer)
    private trainerRepository: Repository<Trainer>,
  ) {}

  findAll(): Promise<Trainer[]> {
    return this.trainerRepository.find();
  }
}
