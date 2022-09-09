import IPayments from "../interface/IPayments";
import IPaymentsRepository from "../interface/IPaymentsRepository";
import PaymentsModel from '../database/mongo/payments'

export default class MongoPaymentsRepository implements IPaymentsRepository{
  create(payment: IPayments): Promise<IPayments> {
    return new Promise(async (resolve, reject) => {
      const newPayment = await PaymentsModel.create(payment)
      resolve({
        id: newPayment?.id,
        title: newPayment?.id,
        img: newPayment?.img
      })
    })
  }
  findAll(): Promise<IPayments[]> {
    return new Promise((resolve, reject) => {
      resolve(PaymentsModel.find({})) 
    })
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

}