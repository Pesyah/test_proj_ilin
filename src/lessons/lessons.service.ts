
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lessons } from './lessons.entity';

@Injectable()
export class LessonsService {
  constructor(
    @InjectRepository(Lessons)
    private lessonsRepository: Repository<Lessons>
  ) {}

  async getAllLessons() {
    return this.lessonsRepository.find({
      relations: {
        evaluations: {
          user: true
        }
      }
    })
  }

  async createLesson(name: string, code: string) {
    return this.lessonsRepository.save({
      name,
      code
    })
  }
}
