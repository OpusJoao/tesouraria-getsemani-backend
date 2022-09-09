import GetAllPaymentsController from "../controller/getAllPaymentsController";
import MongoPaymentsRepository from "../repository/mongoPaymentRepository";
import PaymentsService from "../service/paymentsService";

export const makeGetAllPaymentsController = () : GetAllPaymentsController => {
  const paymentRepository = new MongoPaymentsRepository()
  const paymentService = new PaymentsService(paymentRepository)
  return new GetAllPaymentsController(paymentService)
}