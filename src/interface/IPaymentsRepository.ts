import IPayments from "./IPayments";

export default interface IPaymentsRepository{
  create(payment: IPayments): Promise<IPayments>,
  findAll(): Promise<IPayments[]>,
  findAById(idPayment: String): Promise<IPayments>,
  update(): Promise<IPayments>,
  delete(): Promise<Boolean>,
}