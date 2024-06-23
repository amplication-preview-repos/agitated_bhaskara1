import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LicenseService } from "./license.service";
import { LicenseControllerBase } from "./base/license.controller.base";

@swagger.ApiTags("licenses")
@common.Controller("licenses")
export class LicenseController extends LicenseControllerBase {
  constructor(
    protected readonly service: LicenseService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
