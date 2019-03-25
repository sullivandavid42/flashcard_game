import { Module } from '@nestjs/common';
import { CardsController } from './cards.controller';
import { CardsService } from './cards.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cards } from './cards.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Cards,
    ]),
  ],
  controllers: [CardsController],
  providers: [CardsService],
})
export class CardsModule { }
