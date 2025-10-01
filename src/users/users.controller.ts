import { Body, Controller, Post, Get, ParseIntPipe, Param, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';

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

    @Put(':id')
    update( @Param('id', ParseIntPipe) id: number, @Body() user: UpdateUserDto ) {
        return this.UsersService.update(id, user);
    }
}
