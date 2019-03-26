import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CardsModule } from './cards/cards.module';
import { DATABASE_CONFIG } from './config/database.config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [CardsModule,

    TypeOrmModule.forRoot(DATABASE_CONFIG),

    AuthModule,

    UsersModule,

    CategoriesModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
