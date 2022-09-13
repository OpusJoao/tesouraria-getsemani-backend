import IPayments from "../interface/IPayments";
import IPaymentsRepository from "../interface/IPaymentsRepository";
import PaymentsModel from '../database/mongo/payments'
import mongoose from "mongoose";

export default class MongoPaymentsRepository implements IPaymentsRepository {
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
  findAById(paymentId: string): Promise<IPayments> {
    return new Promise(async (resolve, reject) => {
      if (!mongoose.Types.ObjectId.isValid(paymentId)) reject('Invalid paymentId')

      try {
        const findedPayment = await PaymentsModel.findById(paymentId)
        if (findedPayment) {
          resolve({
            id: findedPayment?.id,
            title: findedPayment?.title || '',
            img: findedPayment?.img
          })
        } else {
          reject('Payment not found')
        }
      } catch (e) {
        reject(e)
      }
    })
  }
  update(): Promise<IPayments> {
    throw new Error("Method not implemented.");
  }
  delete(): Promise<Boolean> {
    throw new Error("Method not implemented.");
  }

}