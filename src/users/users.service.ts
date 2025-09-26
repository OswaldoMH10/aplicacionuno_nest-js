import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { userInfo } from 'os';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private usersRepository: Repository<User>,
    ) { }

    create(user: CreateUserDto) {
        const newUser = this.usersRepository.create(user);
        return this.usersRepository.save(newUser);
    }
}

