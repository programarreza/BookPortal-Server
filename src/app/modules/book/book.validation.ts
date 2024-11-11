import { z } from "zod";

const createBookSchemaValidation = z.object({
  body: z.object({
    title: z.string(),
    genre: z.string(),
    publishedYear: z.number(),
    totalCopies: z.number(),
    availableCopies: z.number(),
  }),
});

export { createBookSchemaValidation };
