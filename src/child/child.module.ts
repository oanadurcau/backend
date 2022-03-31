import { Module } from '@nestjs/common';
import { ChildService } from './child.service';
import { ChildController } from './child.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Child } from '../entity/child.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Child])],
  providers: [ChildService],
  controllers: [ChildController],
})
export class ChildModule {}
