import { Response } from 'express'

type TSuccessResponse<T> = {
  status?: boolean
  message: string
  statusCode: number
  token?:string
  data: T | T[] | null
}

const sendResponse = <T>(res: Response, data: TSuccessResponse<T>) => {
  res.status(data.statusCode).json({
    status: true,
    message: data.message,
    statusCode: data.statusCode,
    token:data.token,
    data: data.data,
  })
}

export default sendResponse