import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import CONNECTION from './db.connection'
import { DatabaseEntity } from './database.entity';
import { LessonsModule } from './lessons/lessons.module';
import { EvaluationsModule } from './evaluations/evaluations.module';

@Module({
  imports: [
    // @ts-ignore
    TypeOrmModule.forRoot({
      ...CONNECTION,
      synchronize: false,
      entities: DatabaseEntity.listEntities()
    }),
    UsersModule,
    LessonsModule,
    EvaluationsModule
  ],
})
export class AppModule { }