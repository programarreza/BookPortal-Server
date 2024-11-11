import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import {
  createBook,
  deleteBook,
  getAllBooks,
  getSingleBook,
  updateBook,
} from "./book.controllers";
import {
  createBookSchemaValidation,
  updateBookSchemaValidation,
} from "./book.validation";

const bookRoutes = Router();

bookRoutes.post("/", validateRequest(createBookSchemaValidation), createBook);
bookRoutes.get("/", getAllBooks);
bookRoutes.get("/:bookId", getSingleBook);
bookRoutes.put(
  "/:bookId",
  validateRequest(updateBookSchemaValidation),
  updateBook
);
bookRoutes.delete("/:bookId", deleteBook);

export { bookRoutes };
