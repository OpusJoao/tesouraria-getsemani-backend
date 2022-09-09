import GetAllPaymentsController from "../controller/getAllPaymentsController";
import PaymentsRepository from "../repository/paymentRepository";
import PaymentsService from "../service/paymentsService";

export const makeGetAllPaymentsController = () : GetAllPaymentsController => {
  const paymentRepository = new PaymentsRepository()
  const paymentService = new PaymentsService(paymentRepository)
  return new GetAllPaymentsController(paymentService)
}