import { SignupDto } from './dtos/signupDto';
import { Controller, Get, Render, Post, Body } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get("/signup")
    @Render("user/signup")
    getSignup(){}

    @Get("Login")
    @Render("user/login")
    getLogin(){
    }

    @Post("/signup")
    postSignup(@Body() body : SignupDto){
        return body
    }
}