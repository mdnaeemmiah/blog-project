
import { USER_ROLE } from "./admin.contant";

export interface IAdmin {
    name: string;  
    email: string;             
    password: string;          
  }
  


  export type TUserRole = keyof typeof USER_ROLE;