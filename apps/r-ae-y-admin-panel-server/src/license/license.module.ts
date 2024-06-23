import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LicenseModuleBase } from "./base/license.module.base";
import { LicenseService } from "./license.service";
import { LicenseController } from "./license.controller";
import { LicenseResolver } from "./license.resolver";

@Module({
  imports: [LicenseModuleBase, forwardRef(() => AuthModule)],
  controllers: [LicenseController],
  providers: [LicenseService, LicenseResolver],
  exports: [LicenseService],
})
export class LicenseModule {}
