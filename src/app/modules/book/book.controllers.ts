import { StatusCodes } from "http-status-codes";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { createBookIntoDB, getAllBooksFromDB } from "./book.services";

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

export { createBook, getAllBooks };
