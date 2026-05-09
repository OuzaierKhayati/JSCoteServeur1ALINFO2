import { Injectable } from '@nestjs/common';

@Injectable()
export class VehiculeRepository {
    async operate() {
        return 'Vehicule is operating';
    }
}
