"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const book_controllers_1 = require("./book.controllers");
const book_validation_1 = require("./book.validation");
const bookRoutes = (0, express_1.Router)();
exports.bookRoutes = bookRoutes;
bookRoutes.post("/", (0, validateRequest_1.default)(book_validation_1.createBookSchemaValidation), book_controllers_1.createBook);
bookRoutes.get("/", book_controllers_1.getAllBooks);
bookRoutes.get("/:bookId", book_controllers_1.getSingleBook);
bookRoutes.put("/:bookId", (0, validateRequest_1.default)(book_validation_1.updateBookSchemaValidation), book_controllers_1.updateBook);
bookRoutes.delete("/:bookId", book_controllers_1.deleteBook);
