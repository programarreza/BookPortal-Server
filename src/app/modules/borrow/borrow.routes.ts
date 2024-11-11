import { Router } from "express";
import { createBorrow } from "./borrow.controller";

const borrowRoutes = Router();

borrowRoutes.post("/", createBorrow);

export default borrowRoutes;
