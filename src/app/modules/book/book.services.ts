import { prisma } from "../../shared/prisma";
import { TBook } from "../../types";

const createBookIntoDB = async (data: TBook) => {
  const isExist = await prisma.book.findFirst({
    where: {
      title: data.title,
    },
  });

  if (isExist) {
    throw new Error("this book already exist");
  }

  const result = await prisma.book.create({
    data,
  });

  return result;
};

const getAllBooksFromDB = async () => {
  const result = await prisma.book.findMany({});

  return result;
};

const getSingleBookFromDB = async (bookId: string) => {
  const result = await prisma.book.findUnique({
    where: {
      bookId,
    },
  });

  return result;
};

const updateBookIntoDB = async (bookId: string, data: Partial<TBook>) => {
  await prisma.book.findUniqueOrThrow({
    where: {
      bookId,
    },
  });

  const result = await prisma.book.update({
    where: {
      bookId,
    },
    data,
  });

  return result;
};

export {
  createBookIntoDB,
  getAllBooksFromDB,
  getSingleBookFromDB,
  updateBookIntoDB,
};
