import { BorrowRecord } from "@prisma/client";
import { subDays } from "date-fns";
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

const getOverdueBorrowFromDB = async () => {
  const overdueDate = subDays(new Date(), 14);

  const overdueBorrows = await prisma.borrowRecord.findMany({
    where: {
      returnDate: null,
      borrowDate: {
        lt: overdueDate,
      },
    },
    include: {
      book: true,
      member: true,
    },
  });

  return overdueBorrows?.map((borrow) => ({
    borrowId: borrow.borrowId,
    bookTitle: borrow.book.title,
    borrowerName: borrow.member.name,
    overdueDays:
      Math.floor(
        (new Date().getTime() - new Date(borrow.borrowDate).getTime()) /
          (1000 * 60 * 60 * 24)
      ) - 14,
  }));
};

export { createBorrowIntoDB, getOverdueBorrowFromDB };
