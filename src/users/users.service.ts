import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
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

    findAll() {
        return this.usersRepository.find();
    }

    findAll_Id(id: number) {
        return this.usersRepository.findOneBy({id});
    }

    async update(id: number, user: UpdateUserDto) {
        const userFound = await this.usersRepository.findOneBy({id});

        if (!userFound) {
            return new HttpException('Usuario no existe', HttpStatus.NOT_FOUND); //404
        }

        const updatedUser = Object.assign(userFound, user);
        return this.usersRepository.save(updatedUser);
    }
}

