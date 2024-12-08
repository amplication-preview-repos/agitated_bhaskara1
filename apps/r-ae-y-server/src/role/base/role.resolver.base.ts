/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Role } from "./Role";
import { RoleCountArgs } from "./RoleCountArgs";
import { RoleFindManyArgs } from "./RoleFindManyArgs";
import { RoleFindUniqueArgs } from "./RoleFindUniqueArgs";
import { CreateRoleArgs } from "./CreateRoleArgs";
import { UpdateRoleArgs } from "./UpdateRoleArgs";
import { DeleteRoleArgs } from "./DeleteRoleArgs";
import { AppUserFindManyArgs } from "../../appUser/base/AppUserFindManyArgs";
import { AppUser } from "../../appUser/base/AppUser";
import { RoleService } from "../role.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Role)
export class RoleResolverBase {
  constructor(
    protected readonly service: RoleService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Role",
    action: "read",
    possession: "any",
  })
  async _rolesMeta(
    @graphql.Args() args: RoleCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Role])
  @nestAccessControl.UseRoles({
    resource: "Role",
    action: "read",
    possession: "any",
  })
  async roles(@graphql.Args() args: RoleFindManyArgs): Promise<Role[]> {
    return this.service.roles(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Role, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Role",
    action: "read",
    possession: "own",
  })
  async role(@graphql.Args() args: RoleFindUniqueArgs): Promise<Role | null> {
    const result = await this.service.role(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Role)
  @nestAccessControl.UseRoles({
    resource: "Role",
    action: "create",
    possession: "any",
  })
  async createRole(@graphql.Args() args: CreateRoleArgs): Promise<Role> {
    return await this.service.createRole({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Role)
  @nestAccessControl.UseRoles({
    resource: "Role",
    action: "update",
    possession: "any",
  })
  async updateRole(@graphql.Args() args: UpdateRoleArgs): Promise<Role | null> {
    try {
      return await this.service.updateRole({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Role)
  @nestAccessControl.UseRoles({
    resource: "Role",
    action: "delete",
    possession: "any",
  })
  async deleteRole(@graphql.Args() args: DeleteRoleArgs): Promise<Role | null> {
    try {
      return await this.service.deleteRole(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [AppUser], { name: "appUsers" })
  @nestAccessControl.UseRoles({
    resource: "AppUser",
    action: "read",
    possession: "any",
  })
  async findAppUsers(
    @graphql.Parent() parent: Role,
    @graphql.Args() args: AppUserFindManyArgs
  ): Promise<AppUser[]> {
    const results = await this.service.findAppUsers(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
