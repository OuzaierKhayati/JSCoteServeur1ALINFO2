import { Injectable } from '@nestjs/common';
import { MoteurService } from 'src/moteur/moteur.service';
import { GenerateurService } from 'src/generateur/generateur.service';
import { PhareService } from 'src/phare/phare.service';
import { AudioService } from 'src/audio/audio.service';
import { VehiculeRepository } from './VehiculeRepository';

@Injectable()
export class VehiculeService {
    constructor(
        private moteurService: MoteurService,
        private generateurService: GenerateurService,
        private phareService: PhareService,
        private audioService: AudioService,
        private vehiculeRepository: VehiculeRepository,
    ) {}

    async operate() {
        const moteur = await this.moteurService.start();
        const power = await this.generateurService.generatePower();
        const phare = await this.phareService.turnOn();
        const audio = await this.audioService.playMusic();
        const vehiculeStatus = await this.vehiculeRepository.operate();
        const result = `Vehicule Status: ${vehiculeStatus}, 
                        Moteur: ${moteur}, 
                        Power: ${power}, 
                        Phare: ${phare}, 
                        Audio: ${audio}`;
        return result;
    }
}
