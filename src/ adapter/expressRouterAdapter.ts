import { Request, Response } from "express"
import ControllerInterface from "../interface/IController"
import HttpRequest from "../interface/IHttpRequest"

export const adaptRoute = (controller: ControllerInterface) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {body: req.body} 
    const httpResponse = await controller.handle(httpRequest)
    return res.status(httpResponse.statusCode).json(httpResponse.body)

  }
}