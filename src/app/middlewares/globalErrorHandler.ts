import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

const globalErrorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(10, error);
  let status;
  if ((error.name = "NotFoundError")) {
    status = 404;
  }
  res.status(status || StatusCodes.INTERNAL_SERVER_ERROR).json({
    success: false,
    status: status || StatusCodes.INTERNAL_SERVER_ERROR,
    message: error.message || "Something went wrong!",
  });
};

export default globalErrorHandler;
