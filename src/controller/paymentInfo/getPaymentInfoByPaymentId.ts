import ControllerInterface from "../../interface/IController";
import IHttpRequest from "../../interface/IHttpRequest";
import IHttpResponse from "../../interface/IHttpResponse";
import PaymentsInfoService from "../../service/paymentsInfoService";
import PaymentsService from "../../service/paymentsService";

export default class GetPaymentInfoByPaymentId implements ControllerInterface{
  public readonly name: String = 'GetPaymentInfoByPaymentId';
  constructor(private readonly paymentInfoService: PaymentsInfoService, private readonly paymentService: PaymentsService){}
  handle(req: IHttpRequest): IHttpResponse | Promise<IHttpResponse> {
    const { paymentId } = req.params

    try{
      const isValidPayment = this.paymentService.isValid(paymentId)
      return { statusCode: 200, body:{message: 'test ok', payment: isValidPayment}}
    }catch(e){
      console.log(e)
      return { statusCode: 200, body:{message: 'test ok'}}
    }
    
  }
  
}