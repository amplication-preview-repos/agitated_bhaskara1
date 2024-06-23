import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RiskAssessmentService } from "./riskAssessment.service";
import { RiskAssessmentControllerBase } from "./base/riskAssessment.controller.base";

@swagger.ApiTags("riskAssessments")
@common.Controller("riskAssessments")
export class RiskAssessmentController extends RiskAssessmentControllerBase {
  constructor(
    protected readonly service: RiskAssessmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
