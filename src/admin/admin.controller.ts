import { Controller, Get } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('api/admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get()
  getHello(): string {
    console.log('admin');
    return this.adminService.getHello();
  }


}
