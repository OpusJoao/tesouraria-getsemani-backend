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
  const paymentInfoService = new PaymentsInfoService(paymentInfoRepository)
  return new GetPaymentInfoByPaymentId(paymentInfoService, paymentService)
}