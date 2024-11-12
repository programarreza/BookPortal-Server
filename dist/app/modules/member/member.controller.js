"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMember = exports.getSingleMember = exports.getAllMembers = exports.deleteMember = exports.createMember = void 0;
const http_status_codes_1 = require("http-status-codes");
const catchAsync_1 = __importDefault(require("../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../shared/sendResponse"));
const member_services_1 = require("./member.services");
const createMember = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, member_services_1.createMemberIntoDB)(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.CREATED,
        success: true,
        message: "Member created successfully",
        data: result,
    });
}));
exports.createMember = createMember;
const getAllMembers = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, member_services_1.getAllMembersFromDB)();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: "Members retrieved successfully",
        data: result,
    });
}));
exports.getAllMembers = getAllMembers;
const getSingleMember = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { memberId } = req.params;
    const result = yield (0, member_services_1.getSingleMemberFromDB)(memberId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: "Member retrieved successfully",
        data: result,
    });
}));
exports.getSingleMember = getSingleMember;
const updateMember = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { memberId } = req.params;
    const result = yield (0, member_services_1.updateMemberIntoDB)(memberId, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: "Member updated successfully",
        data: result,
    });
}));
exports.updateMember = updateMember;
const deleteMember = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { memberId } = req.params;
    const result = yield (0, member_services_1.deleteMemberIntoDB)(memberId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: "Member successfully deleted",
        data: result,
    });
}));
exports.deleteMember = deleteMember;
