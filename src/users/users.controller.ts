import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put,
  NotFoundException,
  UnprocessableEntityException,
  ForbiddenException
} from '@nestjs/common';

interface User {
  id: string;
  name: string;
  email: string;
}

@Controller('users')
export class UsersController {
  private users: User[] = [
    { id: '1', name: 'Domenico Pagano', email: 'master_user@example.com' },
  ];

  @Get()
  getUsers() {
    return this.users;
  }

  @Get(':id')
  findUser(@Param('id') id: string) {
    const user = this.users.find(user => user.id === id);
    if(!user){
      throw new NotFoundException(`User with id ${id} not found`);
    }
    if(user.id === '1'){
      throw new ForbiddenException(`User with id ${id} is not allowed to access this resource`);
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

  /* Método this.users.length + 1
  @Post()
  createUser(@Body() body: User) {
    const newUser = { ...body, id: (this.users.length + 1).toString() };
    this.users.push(newUser);
    return newUser;
  }
  */

  @Post()
  createUser(@Body() body: User) {
    const newUser = { ...body, id: new Date().getTime().toString() };
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
      throw new NotFoundException(`User with id ${id} not found`);
    }
    this.users.splice(position, 1);
    return { message: 'User deleted' };
  }

  /*
  @Put(':id')
  updateUser(@Param('id') id: string, @Body() body: Partial<User>) {
    const user = this.users.find(user => user.id === id);
    if(!user){
      return { error: 'User not found' };
    }
    Object.assign(user, body);
    return user;
  }
  */

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() changes: User){
    const position = this.users.findIndex( user => user.id === id);
    if(position === -1){
      return { error: 'User not found' };
    }
    const currentData = this.users[position];

    const email = changes?.email;
    if(email && !email.includes('@')){
      throw new UnprocessableEntityException(`Invalid email format: ${email}`);
    }

    const updatedUser = { ...currentData, ...changes };
    this.users[position] = updatedUser;
    return updatedUser;
  }

};
