import { z } from "zod";

const createMemberSchemaValidation = z.object({
  body: z.object({
    name: z.string(),
    email: z.string(),
    phone: z.string(),
    membershipDate: z.string(),
  }),
});

const updateMemberSchemaValidation = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string().optional(),
    phone: z.string().optional(),
    membershipDate: z.string().optional(),
  }),
});

export { createMemberSchemaValidation, updateMemberSchemaValidation };
