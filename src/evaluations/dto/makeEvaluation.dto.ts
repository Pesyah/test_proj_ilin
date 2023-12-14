import {
    IsNotEmpty,
    IsNumber,
  } from 'class-validator';
  import { ApiProperty } from '@nestjs/swagger';


export class MakeEvaluationDto {
    @ApiProperty()
    @IsNotEmpty({
        message: "Необходимо оценка урока"
    })
    @IsNumber()
    readonly sroce: number;

    @ApiProperty()
    @IsNotEmpty({
        message: "Необходимо заполнить user_id"
    })
    @IsNumber()
    readonly user_id: number;
}

export class ResponseOnCreateEvoluationDto {

    @ApiProperty()
    readonly lesson: number;

    @ApiProperty()
    readonly sroce: number;

    @ApiProperty()
    readonly user: number;

    @ApiProperty()
    readonly id: number;

    @ApiProperty()
    readonly createdAt: Date;
}