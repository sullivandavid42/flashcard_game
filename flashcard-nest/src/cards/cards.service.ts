import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Cards } from './cards.entity';
import { CardDto } from './dto/cards.dto';

@Injectable()
export class CardsService {

    constructor(
        @InjectRepository(Cards)
        private readonly cardRepository: Repository<Cards>,
    ) { }

    async getAll(): Promise<Cards[]> {
        Logger.log('getAll', CardsService.name);
        return (this.cardRepository.find({
        }));
    }

    async getOne(cardId: number): Promise<Cards> {
        Logger.log('getOne', CardsService.name);
        return (this.cardRepository.findOne(cardId));
    }

    async create(cardDto: CardDto): Promise<Cards> {
        return (this.cardRepository.save(cardDto));
    }

    async updateOne(cardId: number, cardDto: CardDto): Promise<Cards> {
        const card = await this.cardRepository.findOne(cardId);
        if (!card) { return null; }
        const payloaderCard: Cards = {
            title: cardDto.title || card.title,
            frontdesc: cardDto.frontdesc || card.frontdesc,
            backdesc: cardDto.backdesc || card.backdesc,
            isAchieved: cardDto.isAchieved || card.isAchieved,
        };
        await this.cardRepository.update(cardId, payloaderCard);
        return await this.cardRepository.findOne(cardId);
    }

    async deleteOne(cardId: number): Promise<Cards> {
        const card = await this.cardRepository.findOne(cardId);
        if (!card) { return null; }
        return this.cardRepository.remove(card);
    }
}
