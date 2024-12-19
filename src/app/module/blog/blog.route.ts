import { Router } from "express";
import { BlogValidation } from "./blog.validation";
import validateRequest from "../../middleware/validateREquest";
import { BlogController } from "./blog.controller";


const blogRouter = Router();


blogRouter.post('/', validateRequest(BlogValidation.BlogValidationSchema), BlogController.createBlog)
blogRouter.get('/:id', BlogController.getSingleBlog)
blogRouter.patch('/:id', BlogController.updateBlog)
blogRouter.delete('/:id', BlogController.deleteBlog)
blogRouter.get('/',BlogController.getBlog)

export default blogRouter