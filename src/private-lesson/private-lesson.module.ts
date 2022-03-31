import { Module } from '@nestjs/common';
import { PrivateLessonController } from './private-lesson.controller';
import { PrivateLessonService } from './private-lesson.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrivateLesson } from '../entity/privateLesson';

@Module({
  imports: [TypeOrmModule.forFeature([PrivateLesson])],
  controllers: [PrivateLessonController],
  providers: [PrivateLessonService],
})
export class PrivateLessonModule {}
