import { Injectable } from '@nestjs/common';

@Injectable()
export class AudioRepository {
    async playMusic() {
        return 'Music playing';
    }
}
