import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Parent } from '../entity/parent.entity';

@Injectable()
export class ParentService {
  constructor(
    @InjectRepository(Parent)
    private parentRepository: Repository<Parent>,
  ) {}

  findAll(): Promise<Parent[]> {
    return this.parentRepository.find();
  }
}
