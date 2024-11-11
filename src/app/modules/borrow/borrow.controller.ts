import { StatusCodes } from "http-status-codes";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { createBorrowIntoDB, getOverdueBorrowFromDB } from "./borrow.services";

const createBorrow = catchAsync(async (req, res) => {
  const result = await createBorrowIntoDB(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: "Book borrowed successfully",
    data: result,
  });
});

const getOverdueBorrow = catchAsync(async (req, res) => {
  const overdueBorrows = await getOverdueBorrowFromDB();

  // If there are overdue books, return them
  if (overdueBorrows.length > 0) {
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: "Overdue borrow list fetched",
      data: overdueBorrows,
    });
  }

  // If no overdue books
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "No overdue books",
    data: [],
  });
});

export { createBorrow, getOverdueBorrow };
