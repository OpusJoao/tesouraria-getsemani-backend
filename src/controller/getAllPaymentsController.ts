import ControllerInterface from "../interface/IController";
import HttpRequest from "../interface/IHttpRequest";
import HttpResponse from "../interface/IHttpResponse";
import IPaymentsService from "../interface/IPaymentsService";

export default class GetAllPaymentsController implements ControllerInterface{
  constructor(private readonly paymentsService: IPaymentsService){}
  handle(req: HttpRequest): HttpResponse{
    return {statusCode: 200, body:{message: 'ok'}}
  }
}
