import PaymentsModel from '../database/mongo/payments'
import IPaymentsInfo from "../interface/IPaymentsInfo";
import IPaymentsInfoRepository from "../interface/IPaymentsInfoRepository";

export default class MongoPaymentsInfoRepository implements IPaymentsInfoRepository {
  findAll(): Promise<IPaymentsInfo[]> {
    throw new Error('Method not implemented.');
  }
  findAById(idPayment: String): Promise<IPaymentsInfo> {
    throw new Error('Method not implemented.');
  }
  update(): Promise<IPaymentsInfo> {
    throw new Error('Method not implemented.');
  }
  delete(): Promise<Boolean> {
    throw new Error('Method not implemented.');
  }
  create(payment: IPaymentsInfo): Promise<IPaymentsInfo> {
    throw new Error('Method not implemented.');
  }

}