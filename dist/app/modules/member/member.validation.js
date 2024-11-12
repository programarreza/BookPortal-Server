"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMemberSchemaValidation = exports.createMemberSchemaValidation = void 0;
const zod_1 = require("zod");
const createMemberSchemaValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string(),
        email: zod_1.z.string(),
        phone: zod_1.z.string(),
        membershipDate: zod_1.z.string(),
    }),
});
exports.createMemberSchemaValidation = createMemberSchemaValidation;
const updateMemberSchemaValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        email: zod_1.z.string().optional(),
        phone: zod_1.z.string().optional(),
        membershipDate: zod_1.z.string().optional(),
    }),
});
exports.updateMemberSchemaValidation = updateMemberSchemaValidation;
