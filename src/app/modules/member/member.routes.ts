import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { createMember, getAllMembers } from "./member.controller";
import { createMemberSchemaValidation } from "./member.validation";

const memberRoutes = Router();

memberRoutes.post(
  "/",
  validateRequest(createMemberSchemaValidation),
  createMember
);

memberRoutes.get("/", getAllMembers);

export default memberRoutes;
