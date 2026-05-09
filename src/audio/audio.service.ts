import { Injectable } from '@nestjs/common';
import { AudioRepository } from './AudiRepository';

@Injectable()
export class AudioService {
    constructor(public audioRepository: AudioRepository) {}

    async playMusic() {
        return await this.audioRepository.playMusic();
    }
}
