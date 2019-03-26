import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Categories } from './categories.entity';
import { Repository } from 'typeorm';
import { CategoriesDto } from './dto/categories.dto';

@Injectable()
export class CategoriesService {

    constructor(@InjectRepository(Categories)
    private readonly categoryRepo: Repository<Categories>
    ) { }

    async getAll(): Promise<Categories[]> {
        Logger.log('getAll', CategoriesService.name);
        return (this.categoryRepo.find({
        }));
    }

    async getOne(categoryId: number): Promise<Categories> {
        Logger.log('getOne', CategoriesService.name);
        return this.categoryRepo.findOne(categoryId);
    }

    async createCategory(categoryDto: CategoriesDto): Promise<Categories> {
        const category = new Categories();
        category.libelle = categoryDto.libelle;
        return this.categoryRepo.save(category);
    }

    async updateOne(catogeryId: number, categoryDto: CategoriesDto): Promise<Categories> {
        const category = this.categoryRepo.findOne(catogeryId);
        if (!category) { return null; }
        const payloaderCategory: Categories = {
            libelle: categoryDto.libelle,
        };
        await this.categoryRepo.update(catogeryId, payloaderCategory);
        return await this.categoryRepo.findOne(catogeryId);
    }

    async deleteOne(categoryId: number): Promise<Categories> {
        const category = await this.categoryRepo.findOne(categoryId);
        if (!category) { return null; }
        return this.categoryRepo.remove(category);
    }
}
