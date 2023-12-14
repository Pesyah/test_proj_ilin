
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LessonsService } from './lessons.service';
import { CreateLessonDto } from './dto/createLesson.dto';
import { GetAllLessonDto } from './dto/getAllLessonsResponse.dto';
import { Lessons } from './lessons.entity';

@ApiTags('Lessons API')
@Controller('lessons/')
export class LessonsController {
    constructor(private readonly lessonsService: LessonsService) {}


    @ApiResponse({
        status: 200,
        type: GetAllLessonDto
    })
    @Get()
    async getLessons() {
        return this.lessonsService.getAllLessons()
    }

    @ApiCreatedResponse({
        type: Lessons
    })
    @Post()
    async createLesson(@Body() body: CreateLessonDto) {
        return this.lessonsService.createLesson(body.name, body.code)
    }
}
