import { Router } from 'express'
import validateRequest from '../../middleware/validateREquest'
import { UserValidation } from './user.validation'
import { userController } from './user.controller'

const userRouter = Router()

userRouter.post('/create-admin', validateRequest(UserValidation.UserValidationSchema), userController.createAdmin)
userRouter.get('/:userId', userController.getSingleUser)
userRouter.put('/:userId', userController.updateUser)
userRouter.delete('/:userId', userController.deleteUser)
userRouter.get('/',userController.getUser)

export default userRouter