import { Controller, Get } from '@nestjs/common';
import { AudioService } from './audio.service';

@Controller('audio')
export class AudioController {
    constructor(public audioService: AudioService) {}

    @Get('play')
    async playMusic() {
        return await this.audioService.playMusic();
    }
}
