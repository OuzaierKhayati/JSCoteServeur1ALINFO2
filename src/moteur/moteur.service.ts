import { Injectable } from '@nestjs/common';
import { MoteurRepository } from 'src/moteur/MoteurRepository';

@Injectable()
export class MoteurService {
    constructor(private moteurRepository: MoteurRepository) {}

    async start() {
        return await this.moteurRepository.start();
    }

    async getStatus() {
        return await this.moteurRepository.getStatus();
    }
}
