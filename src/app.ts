import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import router from './app/route';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import cookieParser from 'cookie-parser';
import notFound from './app/middleware/notFound';


const app:Application = express()

app.use(express.json())
app.use(cookieParser());
app.use(cors())

app.use('/api', router);

app.use(globalErrorHandler);
app.use(notFound)

export default app;