import { FingerprintGuard, UserGuard } from "@module/common/guards";
import { applyDecorators, UseGuards } from "@nestjs/common";

export const WithUser = () => (
  applyDecorators(
    UseGuards(FingerprintGuard, UserGuard),
  )
);
