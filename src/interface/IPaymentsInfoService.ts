import IPaymentsInfo from "./IPaymentsInfo";

export default interface IPaymentsInfoService{
  create(paymentInfo: IPaymentsInfo): Promise<IPaymentsInfo>,
  findAll(): Promise<IPaymentsInfo[]>,
  findAById(idPayment: String): Promise<IPaymentsInfo>,
  update(): Promise<IPaymentsInfo>,
  delete(): Promise<Boolean>,
}