import { Controller, Get } from '@nestjs/common';
import { VehiculeService } from './vehicule.service';

@Controller('vehicule')
export class VehiculeController {
    constructor(public vehiculeService: VehiculeService) {}

    @Get('operate')
    async operate() {
        return await this.vehiculeService.operate();
    }
}
