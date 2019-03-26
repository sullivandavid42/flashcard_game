import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { Cards } from '../cards/cards.entity';

@Entity('categories')
export class Categories {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ type: 'text' })
    libelle?: string;

    @OneToMany(() => Cards, card => card.category)
    card?: Cards[];
}