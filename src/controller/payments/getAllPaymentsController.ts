import ControllerInterface from "../../interface/IController";
import HttpRequest from "../../interface/IHttpRequest";
import HttpResponse from "../../interface/IHttpResponse";
import IPaymentsService from "../../interface/IPaymentsService";

export default class GetAllPaymentsController implements ControllerInterface{
  constructor(private readonly paymentsService: IPaymentsService){}
  async handle(req: HttpRequest): Promise<HttpResponse>{
    const payments = await this.paymentsService.findAll()
    return {statusCode: 200, body:payments}
  }
}
