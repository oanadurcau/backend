import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { ParentService } from './parent.service';
import { ParentDto } from './parent.dto';

@Controller('api/parent')
export class ParentController {
  constructor(private parentService: ParentService) {}

  @Get()
  getAllParents() {
    console.log('Get all parents');
    return this.parentService.findAll();
  }

  @Post()
  createParent(@Body() parentDto: ParentDto) {
    return this.parentService.createParent(parentDto);
  }

  @Delete()
  deleteParent(@Body() parentId: number) {
    return this.parentService.remove(parentId);
  }
}
