import { StatusCodes } from "http-status-codes";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import {
  createBookIntoDB,
  getAllBooksFromDB,
  getSingleBookFromDB,
  updateBookIntoDB,
} from "./book.services";

const createBook = catchAsync(async (req, res) => {
  const result = await createBookIntoDB(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: "book created successfully!",
    data: result,
  });
});

const getAllBooks = catchAsync(async (req, res) => {
  const result = await getAllBooksFromDB();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Books retrieved successfully",
    data: result,
  });
});

const getSingleBook = catchAsync(async (req, res) => {
  const { bookId } = req.params;

  const result = await getSingleBookFromDB(bookId);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Book retrieved successfully",
    data: result,
  });
});

const updateBook = catchAsync(async (req, res) => {
  const { bookId } = req.params;

  const result = await updateBookIntoDB(bookId, req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Book updated successfully",
    data: result,
  });
});

export { createBook, getAllBooks, getSingleBook, updateBook };
