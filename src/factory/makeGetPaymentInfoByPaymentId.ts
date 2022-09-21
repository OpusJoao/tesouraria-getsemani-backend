import AjvValidatorAdapter from "../ adapter/ajvValidatorAdapter";
import GetPaymentInfoByPaymentId from "../controller/paymentInfo/getPaymentInfoByPaymentId";
import GetAllPaymentsController from "../controller/payments/getAllPaymentsController";
import MongoPaymentsInfoRepository from "../repository/mongoPaymentInfoRepository";
import MongoPaymentsRepository from "../repository/mongoPaymentRepository";
import PaymentsInfoService from "../service/paymentsInfoService";
import PaymentsService from "../service/paymentsService";

export const makeGetPaymentInfoByPaymentId = () : GetPaymentInfoByPaymentId => {
  const paymentRepository = new MongoPaymentsRepository()
  const paymentService = new PaymentsService(paymentRepository)
  const paymentInfoRepository = new MongoPaymentsInfoRepository()
  
  const ajvValidator = new AjvValidatorAdapter({
    type: "object",
    properties: {
        paymentId: {type: "string"},
        title: {type: "string"},
        icon: {type: "string"},
        treasurer: {type: "string"},
        formatedPhone: {type: "string"},
        phone: {type: "string"},
        pix: { type: "object" },
        ted: { type: "object" }
    },
    required: ["paymentId", "title", "icon", "treasurer", "formatedPhone", "phone"],
  })
  const paymentInfoService = new PaymentsInfoService(paymentInfoRepository, paymentService, ajvValidator)
  return new GetPaymentInfoByPaymentId(paymentInfoService, paymentService)
}