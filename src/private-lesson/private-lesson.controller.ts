import { Controller, Get } from '@nestjs/common';
import { PrivateLessonService } from './private-lesson.service';

@Controller('api/private-lesson')
export class PrivateLessonController {
  constructor(private privateLessonService: PrivateLessonService) {}

  @Get()
  getAllPrivateLessons() {
    console.log('Get all private lessons');
    return this.privateLessonService.findAll();
  }
}
