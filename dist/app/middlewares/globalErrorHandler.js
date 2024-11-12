"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const globalErrorHandler = (error, req, res, next) => {
    console.log(10, error);
    let status;
    if ((error.name = "NotFoundError")) {
        status = 404;
    }
    res.status(status || http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        status: status || http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR,
        message: error.message || "Something went wrong!",
    });
};
exports.default = globalErrorHandler;
