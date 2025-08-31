import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { User } from './entities/user.entity';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ){}

  async findAll() {
     const users = await this.usersRepository.find();
     return users;
  }

  async getUserById(id: number) {
    const user = await this.findOne(id);
    if(user.id === 1){
      throw new ForbiddenException(`User with id ${id} is not allowed to access this resource`);
    }
    return user;
  }

  async create(body: CreateUserDto) {
    const newUser = await this.usersRepository.save(body);
    return newUser;
  }

  async update(id: number, changes: UpdateUserDto) {
    const user = await this.findOne(id);
    const updatedUser = this.usersRepository.merge( user, changes );
    return updatedUser;
  }

  async delete(id: number) {
    const user = await this.findOne(id);
    await this.usersRepository.delete(user.id);
    return { message: 'User deleted' };
  }

  // privados:

  private async findOne(id: number) {
    const user = await this.usersRepository.findOneBy({ id });
    if(!user){
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

}
