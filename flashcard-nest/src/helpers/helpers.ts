import { HttpException, HttpStatus, Logger } from '@nestjs/common';
import { Entity } from 'src/users/extended.entity';

export const checkSameIdUrlBody = <T extends Entity>(id: string, resource: T) => {
    console.log('id', id, 'ressource', resource);
    if (id !== resource.id) {
        throw new HttpException(
            'ID in the URL and the ID into the body must be the same',
            HttpStatus.BAD_REQUEST
        );
    }
};
