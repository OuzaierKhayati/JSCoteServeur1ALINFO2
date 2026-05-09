import { Injectable } from "@nestjs/common";

@Injectable()
export class MoteurRepository {
    statusMoteur: string = "stopped";

  async start() {
    this.statusMoteur = "started";
    return "Moteur started";
  }

  async getStatus() {
    return `Moteur status: ${this.statusMoteur}`;
  }

}