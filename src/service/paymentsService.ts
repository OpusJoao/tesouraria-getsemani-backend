import IPayments from "../interface/IPayments";
import IPaymentsRepository from "../interface/IPaymentsRepository";
import IPaymentsService from "../interface/IPaymentsService";

export default class PaymentsService implements IPaymentsService{
  constructor(private readonly paymentsRepository: IPaymentsRepository){}
  create(): Promise<IPayments> {
    throw new Error("Method not implemented.");
  }
  findAById(): Promise<IPayments> {
    throw new Error("Method not implemented.");
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