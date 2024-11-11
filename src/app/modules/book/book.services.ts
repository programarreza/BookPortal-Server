import { prisma } from "../../shared/prisma";
import { TBook } from "../../types";

const createBookIntoDB = async (data: TBook) => {
  const isExist = await prisma.book.findFirst({
    where: {
      title: data.title,
    },
  });

  console.log(isExist);

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

export { createBookIntoDB, getAllBooksFromDB };
