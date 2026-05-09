import { Body, Controller, Delete, Get, Headers, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';

@Controller('users')
export class UsersController {
    users = [{ id: 1, username: 'Mohamed', email: 'mohamed@esprit.tn', status: 'active' },
            { id: 2, username: 'Sarra', email: 'sarra@esprit.tn', status: 'inactive' },
            { id: 3, username: 'Ali', email: 'ali@esprit.tn', status: 'inactive' },
            { id: 4, username: 'Eya', email: 'eya@esprit.tn', status: 'active' }];
        
    @Get("getAll")
    findAll(@Query('id') id: string) {
    if (id) 
        return this.users.filter(user => user.id === parseInt(id));
    return this.users;
    }

    @Get(':id')
    findOne(@Param('id') id: number){
        return this.users.find(user => user.id === Number(id));
    }

    @Post()
    create(@Body() data, @Headers('authorization') authHeader: string) {
        console.log('Authorization:', authHeader);
        const newUser = { id: Date.now(), ...data };
        this.users.push(newUser);
        return newUser;
    }

    @Post("createUsingDto")
    createUsingDto(@Body() createUserDto: CreateUserDto, @Headers('authorization')
        authHeader: string){
        console.log('Authorization:', authHeader);
        const newUser = { id: Date.now(), ...createUserDto };
        this.users.push(newUser);
        return newUser;
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() data){
        const user = this.users.find(user => user.id === Number(id));
        if (user) {
            user.username = data.username;
            user.email = data.email;
            user.status = data.status;
            return user;
        }
        return null;
    }s

    @Patch('updateUsingDto/:id')
    updateUsingDto(@Param('id') id: number, @Body() updateUserDto: CreateUserDto) {
        const user = this.users.find(user => user.id === Number(id));
        if (user) {
        user.username = updateUserDto.username;
        user.email = updateUserDto.email;
        user.status = updateUserDto.status;
        return user;
        }
        return null;
    }

    @Delete(':id')
    remove(@Param('id') id: number){
        const index = this.users.findIndex(user => user.id === Number(id));
        if (index !== -1) 
            return this.users.splice(index, 1)[0];
        return null;
    }

    @Get('active/:status')
    getActiveUsers(@Param('status') status: string){
        return this.users.filter(user => user.status === status);
    }
}