import { Module } from '@nestjs/common';
import { PhareService } from './phare.service';
import { PhareController } from './phare.controller';
import { PhareRepository } from './PhareRepository';

@Module({
  providers: [PhareService, PhareRepository],
  exports: [PhareService, PhareRepository],
  controllers: [PhareController]
})
export class PhareModule {}
