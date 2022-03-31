import { Controller, Get } from '@nestjs/common';
import { SubjectService } from './subject.service';

@Controller('api/subject')
export class SubjectController {
  constructor(private subjectService: SubjectService) {}

  @Get()
  getAllUsers() {
    console.log('Get all subjects');
    return this.subjectService.findAll();
  }
}
