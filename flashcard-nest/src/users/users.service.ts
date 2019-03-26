import { User } from './users.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export class ErrorUserEmailAlreadyExists extends Error {
    message = 'This email already exists';
}

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>) { }

    async register(user: User): Promise<User> {
        const emailAlreadyExists = await this.findOneByEmail(user.email);

        if (emailAlreadyExists) { throw new ErrorUserEmailAlreadyExists(); }

        const newUser: User = await this.userRepository.save(user);
        return newUser;
    }

    findOneById(id: number): Promise<User> {
        return this.userRepository.findOne(id);
    }

    findOneByEmail(email: string): Promise<User> {
        return this.userRepository.findOne(null, { where: { email } });
    }

    findMatchEmailPassword(email: string, password: string): Promise<User> {
        return this.userRepository.findOne(null, { where: { email, password } });
    }
}
