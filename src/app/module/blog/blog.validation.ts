import { z } from "zod";


export const BlogValidationSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Title is required" })
    .max(100, { message: "Title cannot exceed 100 characters" })
    .trim(),
  content: z
    .string()
    .min(1, { message: "Content is required" }),
  author: z
    .string()
    .regex(/^[a-f\d]{24}$/i, { message: "Invalid ObjectId for author" }), 
  isPublished: z
    .boolean()
    .optional() 
    .default(true),
});


export const BlogValidation = {
    BlogValidationSchema,
  };
  