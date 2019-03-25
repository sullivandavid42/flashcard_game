import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cards {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ length: 100 })
    title?: string;

    @Column({ length: 500 })
    frontdesc?: string;

    @Column({ length: 500 })
    backdesc?: string;

    @Column()
    isAchieved?: boolean;
}
