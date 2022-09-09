import ControllerInterface from "../../interface/IController";
import IHttpRequest from "../../interface/IHttpRequest";
import IHttpResponse from "../../interface/IHttpResponse";
import IPayments from "../../interface/IPayments";
import PaymentsService from "../../service/paymentsService";

export default class CreatePaymentController implements ControllerInterface{
  constructor(private readonly paymentService: PaymentsService){}
  handle(req: IHttpRequest): IHttpResponse | Promise<IHttpResponse> {
    const {title, img} = req.body
    if((title === undefined || title === '') || (img === undefined || img === '')){
      return {
        statusCode: 400,
        body: {
          message: 'title or img is missing.'
        }
      }
    }
    const payment : IPayments = {
      title,
      img,
    }
    const createdPayment = this.paymentService.create(payment)

    return { statusCode: 200, body: createdPayment}
  }
  
}