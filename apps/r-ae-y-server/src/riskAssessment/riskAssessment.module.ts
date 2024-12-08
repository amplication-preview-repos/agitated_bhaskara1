import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RiskAssessmentModuleBase } from "./base/riskAssessment.module.base";
import { RiskAssessmentService } from "./riskAssessment.service";
import { RiskAssessmentController } from "./riskAssessment.controller";
import { RiskAssessmentResolver } from "./riskAssessment.resolver";

@Module({
  imports: [RiskAssessmentModuleBase, forwardRef(() => AuthModule)],
  controllers: [RiskAssessmentController],
  providers: [RiskAssessmentService, RiskAssessmentResolver],
  exports: [RiskAssessmentService],
})
export class RiskAssessmentModule {}
