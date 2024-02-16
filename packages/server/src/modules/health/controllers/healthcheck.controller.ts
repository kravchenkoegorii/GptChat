import { Controller, Get } from "@nestjs/common";

@Controller("health")
export class HealthCheckController {
  constructor() {}

  @Get()
  async healthcheck(): Promise<string> {
    return "OK";
  }
}
