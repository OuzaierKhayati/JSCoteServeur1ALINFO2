import { Injectable } from '@nestjs/common';

@Injectable()
export class GenerateurRepository {
    async generatePower() {
        return 'Power generated';
    }
}
