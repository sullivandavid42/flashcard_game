import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CardsModule } from './cards/cards.module';
import { DATABASE_CONFIG } from './config/database.config';

@Module({
  imports: [CardsModule,

    TypeOrmModule.forRoot(DATABASE_CONFIG),
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
