"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const returnBook_controller_1 = require("./returnBook.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const returnBook_validation_1 = require("./returnBook.validation");
const returnBookRoutes = (0, express_1.Router)();
returnBookRoutes.post("/", (0, validateRequest_1.default)(returnBook_validation_1.returnBookSchemaValidation), returnBook_controller_1.returnBook);
exports.default = returnBookRoutes;
