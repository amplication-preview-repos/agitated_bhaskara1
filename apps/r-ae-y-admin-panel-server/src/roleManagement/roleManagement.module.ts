import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RoleManagementModuleBase } from "./base/roleManagement.module.base";
import { RoleManagementService } from "./roleManagement.service";
import { RoleManagementController } from "./roleManagement.controller";
import { RoleManagementResolver } from "./roleManagement.resolver";

@Module({
  imports: [RoleManagementModuleBase, forwardRef(() => AuthModule)],
  controllers: [RoleManagementController],
  providers: [RoleManagementService, RoleManagementResolver],
  exports: [RoleManagementService],
})
export class RoleManagementModule {}
