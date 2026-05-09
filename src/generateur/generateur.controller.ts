import { Controller, Get } from '@nestjs/common';
import { GenerateurService } from './generateur.service';

@Controller('generateur')
export class GenerateurController {
    constructor(public generateurService: GenerateurService) {}

    @Get('generate')
    async generatePower() {
        return await this.generateurService.generatePower();
    }
}
