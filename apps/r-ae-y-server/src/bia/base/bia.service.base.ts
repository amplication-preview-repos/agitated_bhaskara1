/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Bia as PrismaBia,
  Department as PrismaDepartment,
} from "@prisma/client";

export class BiaServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.BiaCountArgs, "select">): Promise<number> {
    return this.prisma.bia.count(args);
  }

  async bias(args: Prisma.BiaFindManyArgs): Promise<PrismaBia[]> {
    return this.prisma.bia.findMany(args);
  }
  async bia(args: Prisma.BiaFindUniqueArgs): Promise<PrismaBia | null> {
    return this.prisma.bia.findUnique(args);
  }
  async createBia(args: Prisma.BiaCreateArgs): Promise<PrismaBia> {
    return this.prisma.bia.create(args);
  }
  async updateBia(args: Prisma.BiaUpdateArgs): Promise<PrismaBia> {
    return this.prisma.bia.update(args);
  }
  async deleteBia(args: Prisma.BiaDeleteArgs): Promise<PrismaBia> {
    return this.prisma.bia.delete(args);
  }

  async getDepartment(parentId: string): Promise<PrismaDepartment | null> {
    return this.prisma.bia
      .findUnique({
        where: { id: parentId },
      })
      .department();
  }
}
