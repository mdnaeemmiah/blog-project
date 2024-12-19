import { Router } from 'express';
import authRouter from '../module/auth/auth.route';
import userRouter from '../module/user/user.route';
import blogRouter from '../module/blog/blog.route';

const router = Router();


const moduleRoutes = [
    {
      path: '/users',
      route: userRouter,
    },
    {
      path: '/auth',
      route: authRouter,
    },
    {
      path: '/blogs',
      route: blogRouter,
    },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;