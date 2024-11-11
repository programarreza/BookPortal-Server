import { StatusCodes } from "http-status-codes";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { createBorrowIntoDB } from "./borrow.services";

const createBorrow = catchAsync(async (req, res) => {
  const result = await createBorrowIntoDB(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: "Book borrowed successfully",
    data: result,
  });
});

export { createBorrow };
