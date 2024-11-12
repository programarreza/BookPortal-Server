"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const member_controller_1 = require("./member.controller");
const member_validation_1 = require("./member.validation");
const memberRoutes = (0, express_1.Router)();
memberRoutes.post("/", (0, validateRequest_1.default)(member_validation_1.createMemberSchemaValidation), member_controller_1.createMember);
memberRoutes.get("/", member_controller_1.getAllMembers);
memberRoutes.get("/:memberId", member_controller_1.getSingleMember);
memberRoutes.put("/:memberId", (0, validateRequest_1.default)(member_validation_1.updateMemberSchemaValidation), member_controller_1.updateMember);
memberRoutes.delete("/:memberId", member_controller_1.deleteMember);
exports.default = memberRoutes;
