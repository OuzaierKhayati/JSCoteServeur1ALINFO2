import { Module } from '@nestjs/common';
import { AudioService } from './audio.service';
import { AudioController } from './audio.controller';
import { AudioRepository } from './AudiRepository';

@Module({
  providers: [AudioService, AudioRepository],
  exports: [AudioService, AudioRepository],
  controllers: [AudioController]
})
export class AudioModule {}
