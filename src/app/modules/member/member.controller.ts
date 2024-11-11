import { StatusCodes } from "http-status-codes";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import {
  createMemberIntoDB,
  getAllMembersFromDB,
  getSingleMemberFromDB,
} from "./member.services";

const createMember = catchAsync(async (req, res) => {
  const result = await createMemberIntoDB(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: "Member created successfully",
    data: result,
  });
});

const getAllMembers = catchAsync(async (req, res) => {
  const result = await getAllMembersFromDB();

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Members retrieved successfully",
    data: result,
  });
});

const getSingleMember = catchAsync(async (req, res) => {
  const { memberId } = req.params;
  const result = await getSingleMemberFromDB(memberId);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Member retrieved successfully",
    data: result,
  });
});

export { createMember, getAllMembers, getSingleMember };
