import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private UsersService: UsersService) {

    }
    
    @Post()
    create(@Body() user: CreateUserDto) {
        return this.UsersService.create(user);
    }
}
