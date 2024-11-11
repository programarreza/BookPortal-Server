import { StatusCodes } from "http-status-codes";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { returnBookIntoDB } from "./returnBook.services";

const returnBook = catchAsync(async (req, res) => {
  const result = await returnBookIntoDB(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Book returned successfully",
    data: result,
  });
});

export { returnBook };
