
import express from 'express';
import { AdminControllers } from './admin.controller';

const router = express.Router();



router.patch('/users/:id/block', AdminControllers.blockUser); 
router.delete('/blogs/:id', AdminControllers.deleteBlog);

export const AdminRoutes = router;
