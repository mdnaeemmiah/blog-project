import mongoose, { Schema, model } from "mongoose";
import { IBlog } from "./blog.interface";


const BlogSchema = new Schema<IBlog>(
    {
      title: {
        type: String,
        required: [true, "Title is required"],
        trim: true,
        maxlength: [100, "Title cannot exceed 100 characters"],
      },
      content: {
        type: String,
        required: [true, "Content is required"],
      },
      author: {
        type: Schema.Types.ObjectId,
        ref: "User", 
      },
      isPublished: {
        type: Boolean,
        default: true, 
      },
    },
    {
      timestamps: true, 
    }
  );

  export const Blog = model<IBlog>("Blog", BlogSchema);