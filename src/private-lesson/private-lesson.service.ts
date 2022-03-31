import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PrivateLesson } from '../entity/privateLesson';
import { Repository } from 'typeorm';

@Injectable()
export class PrivateLessonService {
  constructor(
    @InjectRepository(PrivateLesson)
    private privateLessonRepository: Repository<PrivateLesson>,
  ) {}

  findAll(): Promise<PrivateLesson[]> {
    return this.privateLessonRepository.find();
  }
}
