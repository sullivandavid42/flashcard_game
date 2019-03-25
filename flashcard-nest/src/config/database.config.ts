import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const DATABASE_CONFIG: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123456',
    database: 'flashcards_db',
    entities: ['src/**/*.entity{.ts,.js}'],
    synchronize: true,
};
