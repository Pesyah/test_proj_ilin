
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/createUser.dto';
import { ApiCreatedResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Users } from './users.entity';

@ApiTags('Users API')
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

  @Get('/')
  @ApiOperation({ summary: 'Получить всех пользователей' })
  @ApiResponse({
    status: 200,
    type: [Users],
  })
  async findAll() {
    return this.usersService.findAllUsers();
  }

  @Post('user/create')
  @ApiOperation({ summary: 'Создание пользователя.' })
  @ApiCreatedResponse({
    status: 201,
    type: Users,
  })
  async createUser(@Body() userBody: CreateUserDto,) {
    console.log(123)
    return this.usersService.createUser(userBody.name, userBody.email)
  }
}
