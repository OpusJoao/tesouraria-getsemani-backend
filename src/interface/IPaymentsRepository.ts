import IPayments from "./IPayments";

export default interface IPaymentsRepository{
  create(): Promise<IPayments>,
  findAll(): Promise<Array<IPayments>>,
  findAById(): Promise<IPayments>,
  update(): Promise<IPayments>,
  delete(): Promise<Boolean>,
}