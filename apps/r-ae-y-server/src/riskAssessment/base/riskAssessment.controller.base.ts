/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { RiskAssessmentService } from "../riskAssessment.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { RiskAssessmentCreateInput } from "./RiskAssessmentCreateInput";
import { RiskAssessment } from "./RiskAssessment";
import { RiskAssessmentFindManyArgs } from "./RiskAssessmentFindManyArgs";
import { RiskAssessmentWhereUniqueInput } from "./RiskAssessmentWhereUniqueInput";
import { RiskAssessmentUpdateInput } from "./RiskAssessmentUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class RiskAssessmentControllerBase {
  constructor(
    protected readonly service: RiskAssessmentService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: RiskAssessment })
  @nestAccessControl.UseRoles({
    resource: "RiskAssessment",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createRiskAssessment(
    @common.Body() data: RiskAssessmentCreateInput
  ): Promise<RiskAssessment> {
    return await this.service.createRiskAssessment({
      data: {
        ...data,

        department: data.department
          ? {
              connect: data.department,
            }
          : undefined,
      },
      select: {
        analysisDetails: true,
        createdAt: true,

        department: {
          select: {
            id: true,
          },
        },

        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [RiskAssessment] })
  @ApiNestedQuery(RiskAssessmentFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "RiskAssessment",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async riskAssessments(
    @common.Req() request: Request
  ): Promise<RiskAssessment[]> {
    const args = plainToClass(RiskAssessmentFindManyArgs, request.query);
    return this.service.riskAssessments({
      ...args,
      select: {
        analysisDetails: true,
        createdAt: true,

        department: {
          select: {
            id: true,
          },
        },

        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: RiskAssessment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "RiskAssessment",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async riskAssessment(
    @common.Param() params: RiskAssessmentWhereUniqueInput
  ): Promise<RiskAssessment | null> {
    const result = await this.service.riskAssessment({
      where: params,
      select: {
        analysisDetails: true,
        createdAt: true,

        department: {
          select: {
            id: true,
          },
        },

        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: RiskAssessment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "RiskAssessment",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateRiskAssessment(
    @common.Param() params: RiskAssessmentWhereUniqueInput,
    @common.Body() data: RiskAssessmentUpdateInput
  ): Promise<RiskAssessment | null> {
    try {
      return await this.service.updateRiskAssessment({
        where: params,
        data: {
          ...data,

          department: data.department
            ? {
                connect: data.department,
              }
            : undefined,
        },
        select: {
          analysisDetails: true,
          createdAt: true,

          department: {
            select: {
              id: true,
            },
          },

          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: RiskAssessment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "RiskAssessment",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteRiskAssessment(
    @common.Param() params: RiskAssessmentWhereUniqueInput
  ): Promise<RiskAssessment | null> {
    try {
      return await this.service.deleteRiskAssessment({
        where: params,
        select: {
          analysisDetails: true,
          createdAt: true,

          department: {
            select: {
              id: true,
            },
          },

          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
