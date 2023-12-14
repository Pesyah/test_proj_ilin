import {
    IsEmail,
    IsNotEmpty,
    IsString,
  } from 'class-validator';
  import { ApiProperty } from '@nestjs/swagger';
import { Evaluations } from 'src/evaluations/evaluations.entity';
import { Users } from 'src/users/users.entity';
import { Lessons } from '../lessons.entity';


class EvaluationsInLessonsDto extends Evaluations{
    @ApiProperty()
    user: Users;
}

export class GetAllLessonDto extends Lessons{
    @ApiProperty({
        type: [EvaluationsInLessonsDto]
    })
    evaluations: EvaluationsInLessonsDto;
}