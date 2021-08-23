import { Exclude } from "class-transformer";
import { Entity, Column, PrimaryGeneratedColumn, AfterInsert, AfterRemove } from "typeorm"; //Decorators

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    email: string;
    @Column()
    @Exclude()
    password: string;

    //everytime a new record inserted
    @AfterInsert()
    LogInsert(){
        console.log("Inserted User with id", this.id)
    }
    @AfterRemove()
    LogUpdate(){
        console.log('updated user with id', this.id)
    }
    @AfterRemove()
    LogRemove(){
        console.log('remove a user with id', this.id)
    }
}
