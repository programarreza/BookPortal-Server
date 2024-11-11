import { z } from "zod";

const createBorrowSchemaValidation = z.object({
  body: z.object({
    bookId: z.string(),
    memberId: z.string(),
  }),
});

export { createBorrowSchemaValidation };
