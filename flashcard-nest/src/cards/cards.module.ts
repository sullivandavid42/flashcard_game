import { Module } from '@nestjs/common';
import { CardsController } from './cards.controller';
import { CardsService } from './cards.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cards } from './cards.entity';
import { Categories } from 'src/categories/categories.entity';
import { CategoriesService } from 'src/categories/categories.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Cards,
      Categories,
    ]),
  ],
  controllers: [CardsController],
  providers: [CardsService,
    CategoriesService,
  ],
})
export class CardsModule { }
