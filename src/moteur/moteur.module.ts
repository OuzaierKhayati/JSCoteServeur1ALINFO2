import { Module } from '@nestjs/common';
import { MoteurService } from './moteur.service';
import { MoteurController } from './moteur.controller';
import { MoteurRepository } from './MoteurRepository';

@Module({
  providers: [MoteurService, MoteurRepository],
  exports: [MoteurService, MoteurRepository],
  controllers: [MoteurController]
})
export class MoteurModule {}
