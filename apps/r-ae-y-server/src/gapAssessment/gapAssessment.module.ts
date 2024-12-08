import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GapAssessmentModuleBase } from "./base/gapAssessment.module.base";
import { GapAssessmentService } from "./gapAssessment.service";
import { GapAssessmentController } from "./gapAssessment.controller";
import { GapAssessmentResolver } from "./gapAssessment.resolver";

@Module({
  imports: [GapAssessmentModuleBase, forwardRef(() => AuthModule)],
  controllers: [GapAssessmentController],
  providers: [GapAssessmentService, GapAssessmentResolver],
  exports: [GapAssessmentService],
})
export class GapAssessmentModule {}
