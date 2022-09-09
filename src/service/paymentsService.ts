import IPayments from "../interface/IPayments";
import IPaymentsRepository from "../interface/IPaymentsRepository";
import IPaymentsService from "../interface/IPaymentsService";

export default class PaymentsService implements IPaymentsService{
  constructor(private readonly paymentsRepository: IPaymentsRepository){}
  create(payment: IPayments): Promise<IPayments> {
    return this.paymentsRepository.create(payment)
  }
  findAById(idPayment: string): Promise<IPayments> {
    return this.paymentsRepository.findAById(idPayment)
  }
  update(): Promise<IPayments> {
    throw new Error("Method not implemented.");
  }
  delete(): Promise<Boolean> {
    throw new Error("Method not implemented.");
  }
  findAll(): Promise<Array<IPayments>>{
    return this.paymentsRepository.findAll()
  }
}