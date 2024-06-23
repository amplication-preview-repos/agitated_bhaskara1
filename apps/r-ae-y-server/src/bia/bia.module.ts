import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BiaModuleBase } from "./base/bia.module.base";
import { BiaService } from "./bia.service";
import { BiaController } from "./bia.controller";
import { BiaResolver } from "./bia.resolver";

@Module({
  imports: [BiaModuleBase, forwardRef(() => AuthModule)],
  controllers: [BiaController],
  providers: [BiaService, BiaResolver],
  exports: [BiaService],
})
export class BiaModule {}
