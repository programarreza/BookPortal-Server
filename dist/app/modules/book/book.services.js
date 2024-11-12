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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBookIntoDB = exports.getSingleBookFromDB = exports.getAllBooksFromDB = exports.deleteBookIntoDB = exports.createBookIntoDB = void 0;
const prisma_1 = require("../../shared/prisma");
const createBookIntoDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield prisma_1.prisma.book.findFirst({
        where: {
            title: data.title,
        },
    });
    if (isExist) {
        throw new Error("this book already exist");
    }
    const result = yield prisma_1.prisma.book.create({
        data,
    });
    return result;
});
exports.createBookIntoDB = createBookIntoDB;
const getAllBooksFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.book.findMany({});
    return result;
});
exports.getAllBooksFromDB = getAllBooksFromDB;
const getSingleBookFromDB = (bookId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.book.findUniqueOrThrow({
        where: {
            bookId,
        },
    });
    return result;
});
exports.getSingleBookFromDB = getSingleBookFromDB;
const updateBookIntoDB = (bookId, data) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.prisma.book.findUniqueOrThrow({
        where: {
            bookId,
        },
    });
    const result = yield prisma_1.prisma.book.update({
        where: {
            bookId,
        },
        data,
    });
    return result;
});
exports.updateBookIntoDB = updateBookIntoDB;
const deleteBookIntoDB = (bookId) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.prisma.book.findUniqueOrThrow({
        where: {
            bookId,
        },
    });
    const result = yield prisma_1.prisma.$transaction((transactionClient) => __awaiter(void 0, void 0, void 0, function* () {
        // delete associated borrow records first
        yield transactionClient.borrowRecord.deleteMany({
            where: {
                bookId,
            },
        });
        // delete the book from the book table
        yield transactionClient.book.delete({
            where: {
                bookId,
            },
        });
    }));
    return null;
});
exports.deleteBookIntoDB = deleteBookIntoDB;
