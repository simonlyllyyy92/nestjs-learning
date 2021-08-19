import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"; //Decorators

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    email: string;
    @Column()
    password: string;
}
