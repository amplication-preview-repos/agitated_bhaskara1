import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RiskAssessmentServiceBase } from "./base/riskAssessment.service.base";

@Injectable()
export class RiskAssessmentService extends RiskAssessmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
