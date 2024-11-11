import { Router } from "express";
import { createBook } from "./book.controllers";

const bookRoutes = Router();

bookRoutes.post("/", createBook);

export { bookRoutes };
