"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnBookSchemaValidation = void 0;
const zod_1 = require("zod");
const returnBookSchemaValidation = zod_1.z.object({
    body: zod_1.z.object({
        borrowId: zod_1.z.string(),
    }),
});
exports.returnBookSchemaValidation = returnBookSchemaValidation;
