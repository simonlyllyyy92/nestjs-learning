import { Body, Controller, Post, Get, Patch, Param, Query, Delete, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
    // create instance
    constructor(private usersSerivice: UsersService){}

    @Post('/signup')
    createUser(@Body() body: CreateUserDto) {
        this.usersSerivice.create(body.email, body.password)
    }
    @Get('/:id') // even id is number in DB, but params from url will always be string
    async findUser(@Param('id') id: string) {
        const user = await this.usersSerivice.findOne(parseInt(id))
        if(!user) {
            throw new NotFoundException('user not found')
        }
        return user
    }
    @Get('') // auth?email=absd@asdf.com
    findAllUsers(@Query('email') email: string) {
        return this.usersSerivice.find(email)
    }
    @Delete('/:id')
    remove(@Param('id') id: string) {
        return this.usersSerivice.remove(parseInt(id))
    }

    @Patch('/:id')
    update(@Param('id') id: string, @Body() body: UpdateUserDto){
        return this.usersSerivice.update(parseInt(id), body)
    }
}
