import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GapAssessmentResolverBase } from "./base/gapAssessment.resolver.base";
import { GapAssessment } from "./base/GapAssessment";
import { GapAssessmentService } from "./gapAssessment.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GapAssessment)
export class GapAssessmentResolver extends GapAssessmentResolverBase {
  constructor(
    protected readonly service: GapAssessmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
