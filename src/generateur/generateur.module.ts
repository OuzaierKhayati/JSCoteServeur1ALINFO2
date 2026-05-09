import { Module } from '@nestjs/common';
import { GenerateurService } from './generateur.service';
import { GenerateurController } from './generateur.controller';
import { GenerateurRepository } from './GenerateurRepository';

@Module({
  providers: [GenerateurService, GenerateurRepository],
  exports: [GenerateurService, GenerateurRepository],
  controllers: [GenerateurController]
})
export class GenerateurModule {}
