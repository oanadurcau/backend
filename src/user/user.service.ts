import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserType } from '../entity/userType';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(username: string): Promise<User | undefined> {
    const findUser = await this.usersRepository.findOne({
      select: ['user_id'],
      where: { username },
    });
    return findUser;
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async createUser(
    username: string,
    password: string,
    type: UserType,
  ): Promise<User> {
    const findUser = await this.findOne(username);

    if (findUser != null) throw new Error('This username is already taken');
    return this.usersRepository.save(new User(username, password, type));
  }
}
