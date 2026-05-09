import { Injectable } from '@nestjs/common';

@Injectable()
export class PhareRepository {
    async turnOn() {
        return 'Phares turned on';
    }
}
