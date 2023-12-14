
import { ApiProperty } from '@nestjs/swagger';
import { Lessons } from '../lessons/lessons.entity';
import { Users } from '../users/users.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Evaluations {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  score: number;

  @ApiProperty()
  @ManyToOne(() => Users)
  @JoinColumn()
  user: Users

  @ApiProperty()
  @ManyToOne(() => Lessons, (lessons) => lessons.evaluations)
  lesson: Lessons

  @ApiProperty()
  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  crearedAt: Date
}
