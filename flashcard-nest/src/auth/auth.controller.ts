import { Controller, Post, HttpStatus, HttpException, Body } from '@nestjs/common';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService,
        private readonly userService: UsersService) { }

    @Post('token')
    async createToken(
        @Body('email') email: string,
        @Body('password') password: string
    ): Promise<Token> {
        const userFound = await this.userService.findMatchEmailPassword(email, password);
        // do not give details whether an email exists or if the password is wrong
        if (!userFound) {
            throw new HttpException(
                'Password and email do not match',
                HttpStatus.BAD_REQUEST,
            );
        }
        return this.authService.createToken(email);
    }

}
