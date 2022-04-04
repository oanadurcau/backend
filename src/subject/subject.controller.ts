import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { SubjectService } from './subject.service';
import { SubjectDto } from './subject.dto';

@Controller('api/subject')
export class SubjectController {
  constructor(private subjectService: SubjectService) {}

  @Get()
  getAllSubjects() {
    console.log('Controller >> Get all subjects');
    return this.subjectService.findAll();
  }

  @Post()
  createSubject(@Body() subject: SubjectDto) {
    console.log('Controller >> create subject', subject.name);
    return this.subjectService.createSubject(subject.name);
  }

  @Delete()
  deleteSubject(@Body() subjectId: number) {
    return this.subjectService.remove(subjectId);
  }
}
