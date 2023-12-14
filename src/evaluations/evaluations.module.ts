
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Evaluations } from './evaluations.entity';
import { EvaluationsService } from './evaluations.service';
import { EvaluationsController } from './evaluations.controller';


@Module({
  imports: [TypeOrmModule.forFeature([Evaluations])],
  providers: [EvaluationsService],
  controllers: [EvaluationsController],
})
export class EvaluationsModule {}