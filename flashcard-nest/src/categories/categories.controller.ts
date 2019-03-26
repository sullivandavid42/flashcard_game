import { Controller, Post, Query, Body, Logger, HttpException, HttpStatus, Get, Param, Put, Delete } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesDto } from './dto/categories.dto';

@Controller('categories')
export class CategoriesController {

    constructor(private readonly cateroriesService: CategoriesService) { }

    @Get()
    async getAll() {
        Logger.log('GetAll', CategoriesController.name);
        const categories = await this.cateroriesService.getAll();
        if (categories)
            return (categories);
        throw new HttpException('No categories', HttpStatus.ACCEPTED);
    }

    @Get(':categoryId')
    async getOne(@Param('categoryId') categoryId: number) {
        Logger.log('GetOne', CategoriesController.name);
        const category = await this.cateroriesService.getOne(categoryId);
        if (category)
            return category;
        throw new HttpException('Category does not exist', HttpStatus.NOT_FOUND);
    }

    @Post()
    async create(@Body() categoriesDto: CategoriesDto) {
        Logger.log('Create', CategoriesController.name);
        if (categoriesDto && categoriesDto.libelle) {
            const category = await this.cateroriesService.createCategory(categoriesDto);
            if (category)
                return category;
        }
        throw new HttpException('Not created', HttpStatus.NOT_ACCEPTABLE);
    }

    @Put(':categoryId')
    async updateOne(@Param('categoryId') categoryId: number, @Body() categoryDto: CategoriesDto) {
        Logger.log('UpdateOne', CategoriesController.name);
        if (categoryDto && categoryDto.libelle) {
            const category = await this.cateroriesService.updateOne(categoryId, categoryDto);
            if (category)
                return (category);
        }
        throw new HttpException('Not updated', HttpStatus.NOT_ACCEPTABLE);
    }

    @Delete(':categoryId')
    async deleteOne(@Param('categoryId') categoryId: number) {
        Logger.log('DeleteOne', CategoriesController.name);
        const category = await this.cateroriesService.deleteOne(categoryId);
        if (category) { return category; }
        throw new HttpException('Not deleted', HttpStatus.NOT_FOUND);
    }
}
