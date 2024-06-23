import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { RiskAssessmentResolverBase } from "./base/riskAssessment.resolver.base";
import { RiskAssessment } from "./base/RiskAssessment";
import { RiskAssessmentService } from "./riskAssessment.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => RiskAssessment)
export class RiskAssessmentResolver extends RiskAssessmentResolverBase {
  constructor(
    protected readonly service: RiskAssessmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
