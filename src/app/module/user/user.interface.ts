import { Model } from "mongoose";
import { USER_ROLE } from "./user.contant";

export interface IUser {
    name: string;  
    email: string;             
    password: string;         
    role: "admin" | "user";  
    isBlocked: boolean;           
  }
  
  // export interface UserModel extends Model<IUser> {
  //   //instance methods for checking if the user exist
  //   isUserExistsByCustomId(id: string): Promise<IUser>;
  //   //instance methods for checking if passwords are matched
  //   isPasswordMatched(
  //     plainTextPassword: string,
  //     hashedPassword: string,
  //   ): Promise<boolean>;
  // }

  export type TUserRole = keyof typeof USER_ROLE;