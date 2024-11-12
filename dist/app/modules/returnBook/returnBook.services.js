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
exports.returnBookIntoDB = void 0;
const prisma_1 = require("../../shared/prisma");
const returnBookIntoDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.prisma.borrowRecord.findUniqueOrThrow({
        where: {
            borrowId: data.borrowId,
        },
    });
    const result = yield prisma_1.prisma.borrowRecord.update({
        where: {
            borrowId: data.borrowId,
        },
        data: {
            returnDate: new Date(),
        },
    });
    return null;
});
exports.returnBookIntoDB = returnBookIntoDB;
