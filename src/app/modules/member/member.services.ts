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

const getSingleMemberFromDB = async (memberId: string) => {
  const result = await prisma.member.findUniqueOrThrow({
    where: {
      memberId,
    },
  });

  return result;
};

const updateMemberIntoDB = async (memberId: string, data: Partial<TMember>) => {
  await prisma.member.findUniqueOrThrow({
    where: {
      memberId,
    },
  });

  const result = await prisma.member.update({
    where: {
      memberId,
    },
    data,
  });

  return result;
};

const deleteMemberIntoDB = async (memberId: string) => {
  await prisma.member.findUniqueOrThrow({
    where: {
      memberId,
    },
  });

  const result = await prisma.$transaction(async (transactionClient) => {
    // delete associated borrow records first
    await transactionClient.borrowRecord.deleteMany({
      where: {
        memberId,
      },
    });

    // delete the member from the member table
    await transactionClient.member.delete({
      where: {
        memberId,
      },
    });
  });

  return null;
};

export {
  createMemberIntoDB,
  getAllMembersFromDB,
  getSingleMemberFromDB,
  updateMemberIntoDB,
  deleteMemberIntoDB
};
