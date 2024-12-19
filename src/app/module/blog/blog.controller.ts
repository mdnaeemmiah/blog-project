// req and res manage

import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { BlogService } from './blog.service';

const createBlog = catchAsync(async (req, res) => {
  const payload = req.body;

  const result = await BlogService.createBlogIntoDB(payload);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: 'Blog created successfully',
    data: result,
  });
});

const getBlog = catchAsync(async (req, res) => {
  const result = await BlogService.getBlogIntoDB();

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Blogs getting successfully',
    data: result,
  });
});

const getSingleBlog = catchAsync(async (req, res) => {
  console.log(req.params);
  const id = req.params.id;

  const result = await BlogService.getSingleBlogIntoDB(id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Blog getting successfully',
    data: result,
  });
});

const updateBlog = catchAsync(async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const result = await BlogService.updateBlogIntoDB(id, body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Blog updated successfully',
    data: result,
  });
});

const deleteBlog = catchAsync(async (req, res) => {
  const id = req.params.id;
  await BlogService.deleteBlogIntoDB(id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Blog deleted successfully',
    data: {},
  });
});

export const BlogController = {
  createBlog,
  getBlog,
  getSingleBlog,
  updateBlog,
  deleteBlog,
};
