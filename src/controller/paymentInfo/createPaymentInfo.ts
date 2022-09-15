import IPaymentsInfoRepository from "../../interface/IPaymentsInfoRepository";
import IPaymentsRepository from "../../interface/IPaymentsRepository";
import IController from "../../interface/IController";
import IHttpRequest from "../../interface/IHttpRequest";
import IHttpResponse from "../../interface/IHttpResponse";
import IPaymentsInfoService from "../../interface/IPaymentsInfoService";
import IPaymentsService from "../../interface/IPaymentsService";

export default class CreatePaymentInfoController implements IController{
    constructor(private readonly paymentInfoService: IPaymentsInfoService, private readonly paymentService: IPaymentsService){}
    public name: String = 'CreatePaymentInfoController';
    async handle(req: IHttpRequest): Promise<IHttpResponse> {
       try{
            const createdPaymentInfo = await this.paymentInfoService.create(req.body)
            return {statusCode: 200, body: createdPaymentInfo}
       }catch(e){
            return {statusCode: 400, body: { error: e }}
       }
    }
}