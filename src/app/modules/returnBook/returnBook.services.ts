import { BorrowRecord } from "@prisma/client";
import { prisma } from "../../shared/prisma";

const returnBookIntoDB = async (data: BorrowRecord) => {
  await prisma.borrowRecord.findUniqueOrThrow({
    where: {
      borrowId: data.borrowId,
    },
  });

  const result = await prisma.borrowRecord.update({
    where: {
      borrowId: data.borrowId,
    },
    data: {
      returnDate: new Date(),
    },
  });

  return null;
};

export { returnBookIntoDB };
