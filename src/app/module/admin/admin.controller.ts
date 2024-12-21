
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AdminServices } from './admin.service';
import { StatusCodes } from 'http-status-codes';





const blockUser = catchAsync(async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const result = await AdminServices.blockUser(id, body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'User blocked successfully',
    data: result,
  });
  });
  
const deleteBlog = catchAsync(async (req, res) => {
  const id = req.params.id;
  await AdminServices.deleteBlog(id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Blog deleted successfully',
    data: {},
  });
});


export const AdminControllers = {
  deleteBlog,
  blockUser,
};