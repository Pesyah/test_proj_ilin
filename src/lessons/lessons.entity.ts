
import { ApiProperty } from '@nestjs/swagger';
import { Evaluations } from '../evaluations/evaluations.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, ManyToOne } from 'typeorm';

@Entity()
export class Lessons {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  code: string;

  @OneToMany(() => Evaluations, (evaluations) => evaluations.lesson)
  evaluations: Evaluations
}
