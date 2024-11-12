"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOverdueBorrow = exports.createBorrow = void 0;
const http_status_codes_1 = require("http-status-codes");
const catchAsync_1 = __importDefault(require("../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../shared/sendResponse"));
const borrow_services_1 = require("./borrow.services");
const createBorrow = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, borrow_services_1.createBorrowIntoDB)(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.CREATED,
        success: true,
        message: "Book borrowed successfully",
        data: result,
    });
}));
exports.createBorrow = createBorrow;
const getOverdueBorrow = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const overdueBorrows = yield (0, borrow_services_1.getOverdueBorrowFromDB)();
    // If there are overdue books, return them
    if (overdueBorrows.length > 0) {
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_codes_1.StatusCodes.OK,
            success: true,
            message: "Overdue borrow list fetched",
            data: overdueBorrows,
        });
    }
    // If no overdue books
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: "No overdue books",
        data: [],
    });
}));
exports.getOverdueBorrow = getOverdueBorrow;
