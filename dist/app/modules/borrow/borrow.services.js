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
exports.getOverdueBorrowFromDB = exports.createBorrowIntoDB = void 0;
const date_fns_1 = require("date-fns");
const prisma_1 = require("../../shared/prisma");
const createBorrowIntoDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.prisma.book.findUniqueOrThrow({
        where: {
            bookId: data.bookId,
        },
    });
    yield prisma_1.prisma.member.findUniqueOrThrow({
        where: {
            memberId: data.memberId,
        },
    });
    const result = yield prisma_1.prisma.borrowRecord.create({
        data,
    });
    return result;
});
exports.createBorrowIntoDB = createBorrowIntoDB;
const getOverdueBorrowFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const overdueDate = (0, date_fns_1.subDays)(new Date(), 14);
    const overdueBorrows = yield prisma_1.prisma.borrowRecord.findMany({
        where: {
            returnDate: null,
            borrowDate: {
                lt: overdueDate,
            },
        },
        include: {
            book: true,
            member: true,
        },
    });
    return overdueBorrows === null || overdueBorrows === void 0 ? void 0 : overdueBorrows.map((borrow) => ({
        borrowId: borrow.borrowId,
        bookTitle: borrow.book.title,
        borrowerName: borrow.member.name,
        overdueDays: Math.floor((new Date().getTime() - new Date(borrow.borrowDate).getTime()) /
            (1000 * 60 * 60 * 24)) - 14,
    }));
});
exports.getOverdueBorrowFromDB = getOverdueBorrowFromDB;
