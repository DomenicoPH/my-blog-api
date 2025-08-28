import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';

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

  /* Método de creación de usuario (básico)
  @Post()
  createUser(@Body() body: User) {
    this.users.push(body);
    return body;
  }
  */

  @Post()
  createUser(@Body() body: User) {
    const newUser = { ...body, id: (this.users.length + 1).toString() };
    this.users.push(newUser);
    return newUser;
  }

  /* Método de borrado 1 (redundante)
  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    const user = this.users.find(user => user.id === id);
    if(!user){
      return { error: 'User not found' };
    }
    this.users = this.users.filter(user => user.id !== id);
    return { message: 'User deleted' };
  }
  */

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    const position = this.users.findIndex( user => user.id === id);
    if(position === -1){
      return { error: 'User not found' };
    }
    this.users.splice(position, 1);
    return { message: 'User deleted' };
  }

};
