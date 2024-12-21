
import { Blog } from '../blog/blog.model';
import { IUser } from '../user/user.interface';
import { User } from '../user/user.model';





const blockUser = async (id: string, data: IUser) => {
  const result = await User.findByIdAndUpdate(id, data, {
      new: true,
    })
    return result
  };

  const deleteBlog = async (id: string) => {
 
    const result = await Blog.findByIdAndDelete(id);
    return result;
};



export const AdminServices = {
    deleteBlog,
    blockUser
};
