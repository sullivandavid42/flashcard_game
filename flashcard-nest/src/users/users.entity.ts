import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { Cards } from 'src/cards/cards.entity';

@Entity()
export class User {
    @PrimaryColumn() id: string;

    @Column() firstName: string;

    @Column() lastName: string;

    @Column() email: string;

    @Column({ select: false })
    password: string;

    @OneToMany(() => Cards, card => card.user)
    card?: Cards[];
}
