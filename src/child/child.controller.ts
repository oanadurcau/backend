import { Controller, Get } from '@nestjs/common';
import { ChildService } from './child.service';

@Controller('api/child')
export class ChildController {
  constructor(private childService: ChildService) {}

  @Get()
  getAllChildren() {
    console.log('Get all children');
    return this.childService.findAll();
  }
}
