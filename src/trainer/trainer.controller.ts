import { Body, Controller, Get, Post } from "@nestjs/common";
import { TrainerService } from './trainer.service';
import { TrainerDto } from "./trainer.dto";

@Controller('api/trainer')
export class TrainerController {
  constructor(private trainerService: TrainerService) {}

  @Get()
  getAllTrainers() {
    console.log('Get all trainers');
    return this.trainerService.findAll();
  }

  @Post()
  createTrainer(@Body() trainerDto: TrainerDto){
    return this.trainerService.createTrainer(trainerDto);
  }
}
