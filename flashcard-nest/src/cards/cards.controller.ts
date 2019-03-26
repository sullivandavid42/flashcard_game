import { Controller, Get, Param, Post, Body, Logger, HttpException, HttpStatus, Put, Delete, UseGuards, Req, Query } from '@nestjs/common';

import { CardDto } from './dto/cards.dto';
import { CardsService } from './cards.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('cards')
export class CardsController {

    constructor(private readonly cardsService: CardsService) {

    }
    @UseGuards(AuthGuard('jwt'))
    @Get()
    async getAll() {
        Logger.log('GetAll', CardsController.name);
        const cards = await this.cardsService.getAll();
        if (cards) {
            return (cards);
        }
        throw new HttpException('No card to show', HttpStatus.ACCEPTED);
    }

    @Get(':cardId')
    async getOne(@Param('cardId') cardId: number) {
        Logger.log('GetOne', CardsController.name);
        console.log(cardId);
        const card = await this.cardsService.getOne(cardId);
        if (card) {
            return (card);
        }
        throw new HttpException('Card does not exists', HttpStatus.NOT_FOUND);
    }

    @Get('/user/:idUser')
    async getAllFromUser(@Param('idUser') idUser: number) {
        Logger.log('getAllFromUser', CardsController.name);
        const cards = await this.cardsService.getAllFromUser(idUser);
        if (cards)
            return cards;
        throw new HttpException('No cards to user', HttpStatus.NOT_FOUND);
    }

    @Post()
    async create(@Body() cardDto: CardDto, @Req() req) {
        Logger.log('Create', CardsController.name);
        if (cardDto && cardDto.title && cardDto.frontdesc && cardDto.backdesc) {
            const card = await this.cardsService.create(cardDto);
            if (card) {
                return card;
            }
        }
        throw new HttpException('Not created', HttpStatus.NOT_ACCEPTABLE);
    }

    @Put(':cardId')
    async updateOne(@Param('cardId') cardId: number, @Body() cardDto: CardDto) {
        Logger.log('UpdateOne', CardsController.name);

        if (cardDto.backdesc || cardDto.title || cardDto.frontdesc || cardDto.isAchieved) {
            const card = await this.cardsService.updateOne(cardId, cardDto);
            if (card) { return card; }
        }
        throw new HttpException('Not updated', HttpStatus.NOT_ACCEPTABLE);
    }

    @Delete(':cardId')
    async deleteOne(@Param('cardId') cardId: number) {
        Logger.log('DeleteOne', CardsController.name);
        const card = await this.cardsService.deleteOne(cardId);
        if (card) { return card; }
        throw new HttpException('Not deleted', HttpStatus.NOT_FOUND);
    }

}
