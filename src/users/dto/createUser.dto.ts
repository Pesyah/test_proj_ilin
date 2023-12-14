import {
    IsEmail,
    IsNotEmpty,
    IsString,
  } from 'class-validator';
  import { ApiProperty } from '@nestjs/swagger';
  
  export class CreateUserDto {
    @ApiProperty()
    @IsNotEmpty({
      message: "Необходимо заполнить имя."
    })
    @IsString({
      message: "Имя должен быть строкой(текстом)."
    })
    readonly name: string;

    @ApiProperty()
    @IsNotEmpty({
      message: "Необходимо заполнить почту."
    })
    @IsEmail()
    readonly email: string;
  }
  