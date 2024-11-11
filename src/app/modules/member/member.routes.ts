import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import {
  createMember,
  deleteMember,
  getAllMembers,
  getSingleMember,
  updateMember,
} from "./member.controller";
import {
  createMemberSchemaValidation,
  updateMemberSchemaValidation,
} from "./member.validation";

const memberRoutes = Router();

memberRoutes.post(
  "/",
  validateRequest(createMemberSchemaValidation),
  createMember
);

memberRoutes.get("/", getAllMembers);
memberRoutes.get("/:memberId", getSingleMember);
memberRoutes.put(
  "/:memberId",
  validateRequest(updateMemberSchemaValidation),
  updateMember
);

memberRoutes.delete("/:memberId", deleteMember);

export default memberRoutes;
