import { BorrowRecord } from "@prisma/client";
import { prisma } from "../../shared/prisma";

const createBorrowIntoDB = async (data: BorrowRecord) => {
  await prisma.book.findUniqueOrThrow({
    where: {
      bookId: data.bookId,
    },
  });
  await prisma.member.findUniqueOrThrow({
    where: {
      memberId: data.memberId,
    },
  });

  const result = await prisma.borrowRecord.create({
    data,
  });

  return result;
};

export { createBorrowIntoDB };
