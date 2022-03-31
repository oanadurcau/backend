import { Controller, Get } from '@nestjs/common';
import { ParentService } from './parent.service';

@Controller('api/parent')
export class ParentController {
  constructor(private parentService: ParentService) {}

  @Get()
  getAllParents() {
    console.log('Get all parents');
    return this.parentService.findAll();
  }
}
