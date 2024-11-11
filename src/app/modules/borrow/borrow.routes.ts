import { Router } from "express";
import { createBorrow, getOverdueBorrow } from "./borrow.controller";

const borrowRoutes = Router();

borrowRoutes.post("/", createBorrow);
borrowRoutes.get("/overdue", getOverdueBorrow);

export default borrowRoutes;
