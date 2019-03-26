import { Column, Entity, PrimaryGeneratedColumn, OneToOne, ManyToOne } from 'typeorm';
import { Categories } from 'src/categories/categories.entity';

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

    @Column()
    isPublic?: boolean;

    @ManyToOne(() => Categories, category => category.card)
    category?: Categories;

    // Add relation User/Card (Many(c) to One(u))
}
