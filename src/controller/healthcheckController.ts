import { Request, Response } from "express";

export default class HealthCheckController{
  static index(req: Request, res: Response): Response{
    return res.send({
      message: 'healthy'
    })
  }
}