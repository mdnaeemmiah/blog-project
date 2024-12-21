import { Router } from "express";
import { BlogValidation } from "./blog.validation";
import validateRequest from "../../middleware/validateREquest";
import { BlogController } from "./blog.controller";
import auth from "../../middleware/auth";

const blogRouter = Router();


blogRouter.post('/',auth('user') ,validateRequest(BlogValidation.BlogValidationSchema), BlogController.createBlog)
blogRouter.get('/:id', BlogController.getSingleBlog)
blogRouter.patch('/:id',auth('user'), BlogController.updateBlog)
blogRouter.delete('/:id',auth('user','admin'), BlogController.deleteBlog)
blogRouter.get('/',BlogController.getBlog)

export default blogRouter