import IPayments from "./IPayments";
import IPaymentsInfo from "./IPaymentsInfo";

export default interface IPaymentsInfoRepository{
  create(payment: IPayments): Promise<IPaymentsInfo>,
  findAll(): Promise<IPaymentsInfo[]>,
  findAById(idPayment: String): Promise<IPaymentsInfo>,
  update(): Promise<IPaymentsInfo>,
  delete(): Promise<Boolean>,
}