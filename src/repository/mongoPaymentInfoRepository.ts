import PaymentsInfoModel from '../database/mongo/paymentsInfo'
import IPaymentsInfo from "../interface/IPaymentsInfo";
import IPaymentsInfoRepository from "../interface/IPaymentsInfoRepository";

export default class MongoPaymentsInfoRepository implements IPaymentsInfoRepository {
  findById(idPayment: String): Promise<IPaymentsInfo> {
    throw new Error('Method not implemented.');
  }
  find(query: object): Promise<IPaymentsInfo[]> {
    return new Promise((resolve, reject) => {
      resolve(PaymentsInfoModel.find(query))
    })
  }
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
  async create(paymentInfo: IPaymentsInfo): Promise<IPaymentsInfo> {
    return new Promise( async (resolve, reject) => {
      try{
        const createdPaymentInfo = await PaymentsInfoModel.create(paymentInfo)
        if(createdPaymentInfo){
          resolve({
            paymentId: createdPaymentInfo?.paymentId || '',
            title: createdPaymentInfo?.title || '',
            icon: createdPaymentInfo?.icon || '',
            treasurer: createdPaymentInfo?.treasurer || '',
            formatedPhone: createdPaymentInfo?.formatedPhone || '',
            phone: createdPaymentInfo?.phone || '',
            pix: {
              name: createdPaymentInfo?.phone || '',
              value: createdPaymentInfo?.value || '',
              bank: createdPaymentInfo?.bank || '',
              code: createdPaymentInfo?.code || '',
            },
            ted: {
              name: createdPaymentInfo?.name || '',
              document: createdPaymentInfo?.document || '',
              accountNumber: createdPaymentInfo?.accountNumber || '',
              agency: createdPaymentInfo?.agency || '',
              typeAccount: createdPaymentInfo?.typeAccount || '',
            }
          })
        }else{
          reject('Error while trying to create PaymentInfo')
        }
      }catch(e){
        reject(e)
      }

    })
  }

}