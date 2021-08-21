import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    // repo: Repository<User> //this class's own property
    // constructor(repo: Repository<User>) {
    //     this.repo = repo
    // }

    /**
     * 
     * @param InjectRepository() here tells the DI that we need the User Repository here
     */
    constructor(@InjectRepository(User) private repo: Repository<User>){}

    create(email:string, password: string) {
        // create user Entity with relative email and password but does not save into database
        const user = this.repo.create({ email, password })
        return this.repo.save(user)
    }
    findOne(id: number){
        const user = this.repo.findOne(id)
        return user
    }
    find(email:string) {
        const userList = this.repo.find({email})
        return userList
    }
    async update(id: number, attrs: Partial<User>) {
       const user = await this.findOne(id)
       if(!user) {
           throw new NotFoundException('User not Found!')
       }
       //overwrite all the user properties that within the attrs
       Object.assign(user, attrs)
       return this.repo.save(user)
    }
    async remove(id:number) {
       const user = await this.findOne(id)
        if(!user) {
            throw new NotFoundException('User not Found!')
        }
        return this.repo.remove(user)
    }
}
