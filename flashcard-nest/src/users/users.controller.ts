import { Controller, Put, Body, Param, HttpStatus, HttpException } from '@nestjs/common';
import { UsersService, ErrorUserEmailAlreadyExists } from './users.service';

import { RegisterUserDto } from './dto/users.dto';
import { checkSameIdUrlBody } from 'src/helpers/helpers';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Put()
    register(@Body() user: RegisterUserDto) {
        // checkSameIdUrlBody(id, user);

        return this.usersService.register(user)
            .catch((e: Error) => {
                if (e instanceof ErrorUserEmailAlreadyExists) {
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
