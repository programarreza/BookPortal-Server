import { z } from "zod";

const returnBookSchemaValidation = z.object({
  body: z.object({
    borrowId: z.string(),
  }),
});

export { returnBookSchemaValidation };
