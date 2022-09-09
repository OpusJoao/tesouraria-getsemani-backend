import { Request, response, Response } from "express";

export default class PaymentsController{
  static getAll(req: Request, res: Response): Response{
    return res.send({
      message: 'ok'
    })
  }
}