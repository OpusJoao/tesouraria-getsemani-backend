import IPaymentsInfo from "../interface/IPaymentsInfo";
import IPaymentsInfoRepository from "../interface/IPaymentsInfoRepository";
import IPaymentsInfoService from "../interface/IPaymentsInfoService";

export default class PaymentsInfoService implements IPaymentsInfoService{
  constructor(private readonly paymentsInfoRepository: IPaymentsInfoRepository){}
  create(paymentInfo: IPaymentsInfo): Promise<IPaymentsInfo> {
    return this.paymentsInfoRepository.create(paymentInfo)
  }
  findAById(idPayment: string): Promise<IPaymentsInfo> {
    return this.paymentsInfoRepository.findAById(idPayment)
  }
  update(): Promise<IPaymentsInfo> {
    throw new Error("Method not implemented.");
  }
  delete(): Promise<Boolean> {
    throw new Error("Method not implemented.");
  }
  findAll(): Promise<Array<IPaymentsInfo>>{
    return this.paymentsInfoRepository.findAll()
  }
}