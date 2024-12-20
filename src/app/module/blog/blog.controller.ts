// req and res manage

import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { BlogService } from './blog.service';
import { Blog } from './blog.model';

const createBlog = catchAsync(async (req, res) => {

 const newData= {...req.body,author:req.user._id}
// const newData=req.body
// newData.author=req.user._id


 console.log(newData);

  const result =await BlogService.createBlogIntoDB(newData)
  // const { title, content } = result;

  // const blog = new Blog({
  //   title,
  //   content,
  //   author: req.user._id, // Ensure req.user._id is valid
  // });

  // const savedBlog = await blog.save();



   
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: 'Blog created successfully',
    data: result
  });
});

const getBlog = catchAsync(async (req, res) => {
  const result = await BlogService.getBlogIntoDB(req.query);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Blogs fetched successfully"',
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
