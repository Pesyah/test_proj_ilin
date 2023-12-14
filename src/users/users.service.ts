
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>
  ) {}

  async findAllUsers(): Promise<Users[]> {
    return this.usersRepository.find();
  }

  async createUser(name: string, email: string): Promise<Users> {
    const a = this.usersRepository.save({
      name,
      email
    })
    return a
  }
}
