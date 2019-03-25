import { Injectable } from '@nestjs/common';
import { JwtPayload } from './jwt-payload.interface';
import * as jwt from 'jsonwebtoken';

export interface Token {
    expiresIn: number;
    accessToken: string;
}

@Injectable()
export class AuthService {

    private secretKey: string = 'secretKey';

    constructor(private readonly userService: UsersService) { }

    createToken(email: string): Token {
        const user: JwtPayload = { email };
        // @todo move the expiresIn to an environment variable
        const expiresIn = 3600;
        const accessToken: string = jwt.sign(user, this.secretKey, { expiresIn });

        return {
            expiresIn,
            accessToken,
        };
    }

    async validateUser(payload: JwtPayload): Promise<any> {
        return this.userService.findOneByEmail(payload.email);
    }

    getSecretKey() {
        return this.secretKey;
    }

}
