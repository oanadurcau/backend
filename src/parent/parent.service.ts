import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Parent } from './parent.entity';
import { ParentDto } from './parent.dto';
import { User } from '../user/user.entity';
import { UserType } from '../entity/userType';

@Injectable()
export class ParentService {
  constructor(
    @InjectRepository(Parent)
    private ParentRepository: Repository<Parent>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  findAll(): Promise<Parent[]> {
    return this.ParentRepository.find();
  }

  async findOne(email: string): Promise<Parent | undefined> {
    const findByEmail = this.ParentRepository.findOne({
      select: ['parent_id'],
      where: { email },
    });
    return findByEmail;
  }

  async createParent(parentDto: ParentDto) {
    const findByEmail = await this.findOne(parentDto.email);
    if (findByEmail != null) throw new Error('This email is already taken');

    const username = parentDto.username;
    const findByUsername = await this.userRepository.findOne({
      select: ['user_id'],
      where: { username },
    });

    if (findByUsername != null)
      throw new Error('This username is already taken');

    const user = await this.userRepository.save(
      new User(parentDto.username, parentDto.password, UserType.PARENT),
    );
    return this.ParentRepository.save(
      new Parent(user, parentDto.email, parentDto.phoneNumber),
    );
  }

  async remove(id: number): Promise<void> {
    await this.ParentRepository.delete(id);
  }
}

