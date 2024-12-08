import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BiaService } from "./bia.service";
import { BiaControllerBase } from "./base/bia.controller.base";

@swagger.ApiTags("bias")
@common.Controller("bias")
export class BiaController extends BiaControllerBase {
  constructor(
    protected readonly service: BiaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
