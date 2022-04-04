import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subject } from './subject.entity';

@Injectable()
export class SubjectService {
  constructor(
    @InjectRepository(Subject)
    private subjectRepository: Repository<Subject>,
  ) {}

  findAll(): Promise<Subject[]> {
    return this.subjectRepository.find();
  }

  async findOne(name: string): Promise<Subject | undefined> {
    const findSubject = await this.subjectRepository.findOne({
      select: ['subject_id'],
      where: { name },
    });
    return findSubject;
  }

  async createSubject(name: string): Promise<Subject> {
    const findSubject = await this.findOne(name);

    if (findSubject != null) throw new Error('The subject already exists');
    else return this.subjectRepository.save(new Subject(name));
  }

  async remove(id: number): Promise<void> {
    await this.subjectRepository.delete(id);
  }
}
