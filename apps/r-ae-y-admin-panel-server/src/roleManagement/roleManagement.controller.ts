import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RoleManagementService } from "./roleManagement.service";
import { RoleManagementControllerBase } from "./base/roleManagement.controller.base";

@swagger.ApiTags("roleManagements")
@common.Controller("roleManagements")
export class RoleManagementController extends RoleManagementControllerBase {
  constructor(
    protected readonly service: RoleManagementService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
