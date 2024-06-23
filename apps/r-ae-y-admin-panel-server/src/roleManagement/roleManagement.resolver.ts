import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { RoleManagementResolverBase } from "./base/roleManagement.resolver.base";
import { RoleManagement } from "./base/RoleManagement";
import { RoleManagementService } from "./roleManagement.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => RoleManagement)
export class RoleManagementResolver extends RoleManagementResolverBase {
  constructor(
    protected readonly service: RoleManagementService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
