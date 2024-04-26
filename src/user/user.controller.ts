import { UserService } from './user.service';
import { SignupDto } from './dtos/signupDto';
import { Controller, Get, Render, Post, Body } from '@nestjs/common';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Get("/signup")
    @Render("user/signup")
    getSignup(){}

    @Get("Login")
    @Render("user/login")
    getLogin(){
    }

    @Post("/signup")
    async postSignup(@Body() body : SignupDto){
        return {message : await this.userService.postSignup(body)}
    }
}