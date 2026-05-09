import { Injectable } from '@nestjs/common';
import { GenerateurRepository } from './GenerateurRepository';

@Injectable()
export class GenerateurService {
    constructor(public generateurRepository: GenerateurRepository) {}

    async generatePower() {
        return await this.generateurRepository.generatePower();
    }
}
