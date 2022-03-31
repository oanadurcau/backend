import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto';

@Controller('api/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getAllUsers() {
    console.log('Get all users');
    return this.userService.findAll();
  }

  @Post()
  createUser(@Body() user: UserDto) {
    return this.userService.createUser(user.username, user.password);
  }
}
