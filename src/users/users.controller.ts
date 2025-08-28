import { Controller, Get, Param, Post } from '@nestjs/common';

interface User {
  id: string;
  name: string;
  email: string;
}

@Controller('users')
export class UsersController {
  private users: User[] = [
    { id: '1', name: 'Domenico Pagano', email: 'domenico@example.com' },
    { id: '2', name: 'Juan Perez', email: 'juan@example.com' },
    { id: '3', name: 'Maria Gomez', email: 'maria@example.com' },
    { id: '4', name: 'Gnomo No', email: 'gnomono@example.com' },
  ];

  @Get()
  getUsers() {
    return this.users;
  }

  @Get(':id')
  findUser(@Param('id') id: string) {
    const user = this.users.find(user => user.id === id);
    if(!user){
      return { error: 'User not found' };
    }
    return user;
  }
}

@Post()
createUser(@Body() body: User) {
  this.users.push(body);
  return body;
}
