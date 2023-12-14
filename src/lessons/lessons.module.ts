
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lessons } from './lessons.entity';
import { LessonsController } from './lessons.controller';
import { LessonsService } from './lessons.service';



@Module({
  imports: [TypeOrmModule.forFeature([Lessons])],
  providers: [LessonsService],
  controllers: [LessonsController],
})
export class LessonsModule {}