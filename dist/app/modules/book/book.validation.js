"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBookSchemaValidation = exports.createBookSchemaValidation = void 0;
const zod_1 = require("zod");
const createBookSchemaValidation = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string(),
        genre: zod_1.z.string(),
        publishedYear: zod_1.z.number(),
        totalCopies: zod_1.z.number(),
        availableCopies: zod_1.z.number(),
    }),
});
exports.createBookSchemaValidation = createBookSchemaValidation;
const updateBookSchemaValidation = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        genre: zod_1.z.string().optional(),
        publishedYear: zod_1.z.number().optional(),
        totalCopies: zod_1.z.number().optional(),
        availableCopies: zod_1.z.number().optional(),
    }),
});
exports.updateBookSchemaValidation = updateBookSchemaValidation;
