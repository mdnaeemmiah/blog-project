import { IUser } from '../user/user.interface'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { User } from '../user/user.model'
import config from '../../config'

const register = async (payload: IUser) => {
  const result = await User.create(payload)
  return result
}

const login = async (payload: { email: string; password: string }) => {
  // checking if the user is exist
  const user = await User.findOne({ email: payload?.email}).select('+password');

  if (!user) {
    throw new Error('This user is not found !')
  }

  // checking if the user is inactive
  const userStatus = user?.isBlocked

  if (userStatus) {
    throw new Error('This user is blocked ! !')
  }

  //checking if the password is correct
  const isPasswordMatched = await bcrypt.compare(
    payload?.password,
    user?.password
  )

  if (!isPasswordMatched) {
    throw new Error('Wrong Password!!! Tell me who are you? 35')
  }

  //create token and sent to the  client
  const jwtPayload = {
    _id:user?._id,
    email: user?.email,
    role: user?.role,
  }

  const token = jwt.sign(jwtPayload, config.jwt_access_secret as string, { expiresIn: '30d' });
  

  return {token, user};
}

export const AuthService = {
  register,
  login,
}