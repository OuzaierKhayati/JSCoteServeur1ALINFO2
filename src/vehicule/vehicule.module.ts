import { Global, Module } from '@nestjs/common';
import { VehiculeService } from './vehicule.service';
import { VehiculeController } from './vehicule.controller';
import { VehiculeRepository } from './VehiculeRepository';
import { MoteurModule } from 'src/moteur/moteur.module';
import { GenerateurModule } from 'src/generateur/generateur.module';
import { PhareModule } from 'src/phare/phare.module';
import { AudioModule } from 'src/audio/audio.module';

@Global()
@Module({
  imports: [MoteurModule, GenerateurModule, PhareModule, AudioModule],
  providers: [VehiculeService, VehiculeRepository],
  controllers: [VehiculeController]
})
export class VehiculeModule {}
