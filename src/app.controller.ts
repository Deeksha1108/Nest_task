import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';


@UseGuards()
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  someProtectedRoute(@Req() req){
    return { message: 'Accessed Resourse', userId: req.userId}
  }
}
