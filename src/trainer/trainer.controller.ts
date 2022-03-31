import { Controller, Get } from '@nestjs/common';
import { TrainerService } from './trainer.service';

@Controller('api/trainer')
export class TrainerController {
  constructor(private trainerService: TrainerService) {}

  @Get()
  getAllTrainers() {
    console.log('Get all trainers');
    return this.trainerService.findAll();
  }
}
