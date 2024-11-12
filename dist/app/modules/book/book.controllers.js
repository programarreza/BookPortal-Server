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
exports.updateBook = exports.getSingleBook = exports.getAllBooks = exports.deleteBook = exports.createBook = void 0;
const http_status_codes_1 = require("http-status-codes");
const catchAsync_1 = __importDefault(require("../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../shared/sendResponse"));
const book_services_1 = require("./book.services");
const createBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, book_services_1.createBookIntoDB)(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.CREATED,
        success: true,
        message: "book created successfully!",
        data: result,
    });
}));
exports.createBook = createBook;
const getAllBooks = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, book_services_1.getAllBooksFromDB)();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: "Books retrieved successfully",
        data: result,
    });
}));
exports.getAllBooks = getAllBooks;
const getSingleBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookId } = req.params;
    const result = yield (0, book_services_1.getSingleBookFromDB)(bookId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: "Book retrieved successfully",
        data: result,
    });
}));
exports.getSingleBook = getSingleBook;
const updateBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookId } = req.params;
    const result = yield (0, book_services_1.updateBookIntoDB)(bookId, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: "Book updated successfully",
        data: result,
    });
}));
exports.updateBook = updateBook;
const deleteBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookId } = req.params;
    const result = yield (0, book_services_1.deleteBookIntoDB)(bookId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: "Book successfully deleted",
        data: result,
    });
}));
exports.deleteBook = deleteBook;
