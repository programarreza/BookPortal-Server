"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBorrowSchemaValidation = void 0;
const zod_1 = require("zod");
const createBorrowSchemaValidation = zod_1.z.object({
    body: zod_1.z.object({
        bookId: zod_1.z.string(),
        memberId: zod_1.z.string(),
    }),
});
exports.createBorrowSchemaValidation = createBorrowSchemaValidation;
