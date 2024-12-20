import QueryBuilder from '../../builder/QueryBuilder';
import { blogSearchableFields } from './blog.constant';
import { IBlog } from './blog.interface';
import { Blog } from './blog.model';

const createBlogIntoDB = async (payload: IBlog) => {

  const result = await Blog.create(payload);

  const populatedBlog = await Blog.findById(result._id).populate('author');
  console.log(populatedBlog);

  const newUser ={
    _id:result._id,
    title:result.title,
    content:result.content,
    author:populatedBlog?.author,

  }

  return newUser;
};

const getBlogIntoDB = async (query: Record<string, unknown>) => {
  const blogQuery = new QueryBuilder(Blog.find().populate('author'), query)
    .search(blogSearchableFields)
    .filter()
    .sort()

  const result = await blogQuery.modelQuery;
  return result;
};

const getSingleBlogIntoDB = async (id: string) => {
  //   const result = await Blog.findOne({name:"habi jabi"})
  const result = await Blog.findById(id).populate('author');
  return result;
};

const updateBlogIntoDB = async (id: string, data: IBlog) => {
  const result = await Blog.findByIdAndUpdate(id, data, {
    new: true,
  }).populate('author');
  return result;
};

const deleteBlogIntoDB = async (id: string) => {
  const result = await Blog.findByIdAndDelete(id);
  return result;
};

export const BlogService = {
  createBlogIntoDB,
  getBlogIntoDB,
  getSingleBlogIntoDB,
  updateBlogIntoDB,
  deleteBlogIntoDB,
};
