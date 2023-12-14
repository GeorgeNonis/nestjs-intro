import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './user.types';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  addUser(@Body() { address, age, name }: UserDTO) {
    const userId = this.userService.addUser({ name, address, age });

    return { id: userId };
  }
}
