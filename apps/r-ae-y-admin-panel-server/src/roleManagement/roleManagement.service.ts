import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RoleManagementServiceBase } from "./base/roleManagement.service.base";

@Injectable()
export class RoleManagementService extends RoleManagementServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
