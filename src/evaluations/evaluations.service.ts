
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Evaluations } from './evaluations.entity';

@Injectable()
export class EvaluationsService {
  constructor(
    @InjectRepository(Evaluations)
    private evaluationsRepository: Repository<Evaluations>
  ) {}

  async createEvaluations(lesson, score: number, user) {
    return this.evaluationsRepository.save({
      lesson,
      score,
      user
    })
  }
}
