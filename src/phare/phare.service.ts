import { Injectable } from '@nestjs/common';
import { PhareRepository } from './PhareRepository';

@Injectable()
export class PhareService {
    constructor(public phareRepository: PhareRepository) {}

    async turnOn() {
        return await this.phareRepository.turnOn();
    }
}
