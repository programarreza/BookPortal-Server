import { Router } from "express";
import { returnBook } from "./returnBook.controller";
import validateRequest from "../../middlewares/validateRequest";
import { returnBookSchemaValidation } from "./returnBook.validation";

const returnBookRoutes = Router();

returnBookRoutes.post("/",validateRequest(returnBookSchemaValidation), returnBook);

export default returnBookRoutes;
