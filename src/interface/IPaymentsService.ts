import IPayments from "./IPayments";

export default interface IPaymentsService{
    create(): Promise<IPayments>,
  findAll(): Promise<Array<IPayments>>,
  findAById(): Promise<IPayments>,
  update(): Promise<IPayments>,
  delete(): Promise<Boolean>,
}