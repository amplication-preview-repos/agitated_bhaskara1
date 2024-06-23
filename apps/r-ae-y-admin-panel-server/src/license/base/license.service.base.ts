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
  License as PrismaLicense,
  User as PrismaUser,
} from "@prisma/client";

export class LicenseServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.LicenseCountArgs, "select">): Promise<number> {
    return this.prisma.license.count(args);
  }

  async licenses(args: Prisma.LicenseFindManyArgs): Promise<PrismaLicense[]> {
    return this.prisma.license.findMany(args);
  }
  async license(
    args: Prisma.LicenseFindUniqueArgs
  ): Promise<PrismaLicense | null> {
    return this.prisma.license.findUnique(args);
  }
  async createLicense(args: Prisma.LicenseCreateArgs): Promise<PrismaLicense> {
    return this.prisma.license.create(args);
  }
  async updateLicense(args: Prisma.LicenseUpdateArgs): Promise<PrismaLicense> {
    return this.prisma.license.update(args);
  }
  async deleteLicense(args: Prisma.LicenseDeleteArgs): Promise<PrismaLicense> {
    return this.prisma.license.delete(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.license
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
