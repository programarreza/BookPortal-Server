import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { createBook, getAllBooks } from "./book.controllers";
import { createBookSchemaValidation } from "./book.validation";

const bookRoutes = Router();

bookRoutes.post("/", validateRequest(createBookSchemaValidation), createBook);
bookRoutes.get("/", getAllBooks);

export { bookRoutes };
