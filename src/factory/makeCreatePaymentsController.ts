import CreatePaymentController from "../controller/payments/createPaymentController";
import MongoPaymentsRepository from "../repository/mongoPaymentRepository";
import PaymentsService from "../service/paymentsService";


export const makeCreatePaymentController = () : CreatePaymentController => {
  const paymentService = new PaymentsService(new MongoPaymentsRepository)
  return new CreatePaymentController(paymentService)
}