import { Controller, Get } from '@nestjs/common';
import { PhareService } from './phare.service';

@Controller('phare')
export class PhareController {
    constructor(public phareService: PhareService) {}

    @Get('turnon')
    async turnOn() {
        return await this.phareService.turnOn();
    }
}
