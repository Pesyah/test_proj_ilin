import {
    IsEmail,
    IsNotEmpty,
    IsString,
  } from 'class-validator';
  import { ApiProperty } from '@nestjs/swagger';
  
  export class CreateLessonDto {
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
      message: "Необходимо заполнить имя."
    })
    @IsEmail()
    readonly code: string;
  }
  