import { prisma } from "../../shared/prisma";
import { TMember } from "../../types";

const createMemberIntoDB = async (data: TMember) => {
  const isExist = await prisma.member.findUnique({
    where: {
      email: data.email,
    },
  });

  if (isExist) {
    throw new Error("This member is already exist!");
  }

  const result = await prisma.member.create({
    data,
  });

  return result;
};

const getAllMembersFromDB = async () => {
  const result = await prisma.member.findMany({});

  return result;
};

export { createMemberIntoDB, getAllMembersFromDB };
