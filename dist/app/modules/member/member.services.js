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
exports.deleteMemberIntoDB = exports.updateMemberIntoDB = exports.getSingleMemberFromDB = exports.getAllMembersFromDB = exports.createMemberIntoDB = void 0;
const prisma_1 = require("../../shared/prisma");
const createMemberIntoDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield prisma_1.prisma.member.findUnique({
        where: {
            email: data.email,
        },
    });
    if (isExist) {
        throw new Error("This member is already exist!");
    }
    const result = yield prisma_1.prisma.member.create({
        data,
    });
    return result;
});
exports.createMemberIntoDB = createMemberIntoDB;
const getAllMembersFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.member.findMany({});
    return result;
});
exports.getAllMembersFromDB = getAllMembersFromDB;
const getSingleMemberFromDB = (memberId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.member.findUniqueOrThrow({
        where: {
            memberId,
        },
    });
    return result;
});
exports.getSingleMemberFromDB = getSingleMemberFromDB;
const updateMemberIntoDB = (memberId, data) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.prisma.member.findUniqueOrThrow({
        where: {
            memberId,
        },
    });
    const result = yield prisma_1.prisma.member.update({
        where: {
            memberId,
        },
        data,
    });
    return result;
});
exports.updateMemberIntoDB = updateMemberIntoDB;
const deleteMemberIntoDB = (memberId) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.prisma.member.findUniqueOrThrow({
        where: {
            memberId,
        },
    });
    const result = yield prisma_1.prisma.$transaction((transactionClient) => __awaiter(void 0, void 0, void 0, function* () {
        // delete associated borrow records first
        yield transactionClient.borrowRecord.deleteMany({
            where: {
                memberId,
            },
        });
        // delete the member from the member table
        yield transactionClient.member.delete({
            where: {
                memberId,
            },
        });
    }));
    return null;
});
exports.deleteMemberIntoDB = deleteMemberIntoDB;
