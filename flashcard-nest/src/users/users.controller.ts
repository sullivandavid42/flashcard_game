import { Controller, Put, Body, Param, HttpStatus, HttpException } from '@nestjs/common';
import { UsersService, ErrorUserIdAlreadyExists, ErrorUserEmailAlreadyExists } from './users.service';

import { RegisterUserDto } from './dto/users.dto';
import { checkSameIdUrlBody } from 'src/helpers/helpers';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Put(':id')
    register(@Param('id') id: string, @Body() user: RegisterUserDto) {
        checkSameIdUrlBody(id, user);

        return this.usersService
            .register(user)
            .catch((e: Error) => {
                if (e instanceof ErrorUserIdAlreadyExists) {
                    throw new HttpException(
                        'This ID already exists, are you just trying to login?',
                        HttpStatus.CONFLICT
                    );
                } else if (e instanceof ErrorUserEmailAlreadyExists) {
                    throw new HttpException(
                        'This email already exists, are you just trying to login?',
                        HttpStatus.CONFLICT
                    );
                } else {
                    throw e;
                }
            });
    }
}
