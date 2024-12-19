import { IBlog } from "./blog.interface";
import { Blog } from "./blog.model";


const createBlogIntoDB= async (payload: IBlog): Promise<IBlog> => {
  const result = await Blog.create(payload)

  return result
}

const getBlogIntoDB = async () => {
  const result = await Blog.find()
  return result
}

const getSingleBlogIntoDB = async (id: string) => {
  //   const result = await Blog.findOne({name:"habi jabi"})
  const result = await Blog.findById(id)
  return result
}

const updateBlogIntoDB = async (id: string, data: IBlog) => {
  const result = await Blog.findByIdAndUpdate(id, data, {
    new: true,
  })
  return result
}

const deleteBlogIntoDB = async (id: string) => {
  const result = await Blog.findByIdAndDelete(id)
  return result
}

export const BlogService = {
  createBlogIntoDB,
  getBlogIntoDB,
  getSingleBlogIntoDB,
  updateBlogIntoDB,
  deleteBlogIntoDB,
}