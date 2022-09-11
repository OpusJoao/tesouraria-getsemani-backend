import IPayments from "./IPayments";

export default interface IPaymentsService{
  create(payment: IPayments): Promise<IPayments>,
  findAll(): Promise<IPayments[]>,
  findAById(idPayment: String): Promise<IPayments>,
  update(): Promise<IPayments>,
  delete(): Promise<Boolean>,
  isValid(paymentId: String): Promise<Boolean>
}