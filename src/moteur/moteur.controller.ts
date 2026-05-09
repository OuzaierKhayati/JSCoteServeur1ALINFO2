import { Controller, Get, Param, Post } from '@nestjs/common';
import { MoteurService } from './moteur.service';

@Controller('moteur')
export class MoteurController {
    constructor(private moteurService: MoteurService) {}

    @Get('start/:moteurName')
    async start(@Param('moteurName') moteurName: string) {
        const result = await this.moteurService.start();
        return `${result}: ${moteurName}`;
    }

    @Get('status')
    async getStatus() {
        return await this.moteurService.getStatus();
    }
}
