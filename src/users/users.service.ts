import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { User } from './user.model';
import { CreateUserDto, UpdateUserDto } from './user.dto';

@Injectable()
export class UsersService {

  private users: User[] = [
    { id: '1',
      name: 'Master User',
      email: 'master_user@example.com'
    },
  ];

  findAll() {
    return this.users;
  }

  getUserById(id: string) {
    const position = this.findOne(id);
    const user = this.users[position];
    if(user.id === '1'){
      throw new ForbiddenException(`User with id ${id} is not allowed to access this resource`);
    }
    return user;
  }

  create(body: CreateUserDto) {
    const newUser = { ...body, id: new Date().getTime().toString() };
    this.users.push(newUser);
    return newUser;
  }

  update(id: string, changes: UpdateUserDto) {
    const position = this.findOne(id);
    const currentData = this.users[position];
    const updatedUser = { ...currentData, ...changes };
    this.users[position] = updatedUser;
    return updatedUser;
  }

  delete(id: string) {
    const position = this.findOne(id);
    this.users.splice(position, 1);
    return { message: 'User deleted' };
  }

  // privados:

  private findOne(id: string) {
    const position = this.users.findIndex( user => user.id === id);
    if(position === -1){
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return position;
  }

}
