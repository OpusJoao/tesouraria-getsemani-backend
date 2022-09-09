import { Request, response, Response } from "express";
import IPaymentsService from "../interface/IPaymentsService";

export default class PaymentsController{
  constructor(private readonly paymentsService: IPaymentsService){}
  async findAll(req: Request, res: Response): Response{
    const payments = await this.paymentsService.findAll()
    return res.send({
      message: 'ok'
    })
  }
}
