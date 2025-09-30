import { Body, Controller, Post, Get, ParseIntPipe, Param } from '@nestjs/common';
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

    @Get()
    findAll() {
        return this.UsersService.findAll();
    }

    @Get(':id')
    findAll_Id( @Param('id', ParseIntPipe) id: number ) {
        return this.UsersService.findAll_Id(id);
    }
}
