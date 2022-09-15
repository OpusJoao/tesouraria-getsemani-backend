import IPaymentsInfo from "../interface/IPaymentsInfo";
import IPaymentsInfoRepository from "../interface/IPaymentsInfoRepository";
import IPaymentsInfoService from "../interface/IPaymentsInfoService";
import IValidator from "../interface/IValidator";
import IPaymentsService from "../interface/IPaymentsService";

export default class PaymentsInfoService implements IPaymentsInfoService{
  constructor(private readonly paymentsInfoRepository: IPaymentsInfoRepository, private readonly paymentService: IPaymentsService, private readonly validator: IValidator){}
  create(paymentInfo: IPaymentsInfo): Promise<IPaymentsInfo> {
   return new Promise( async (resolve, reject) => {
      const hasPaymentInfoAlready = await this.findByPaymentId(paymentInfo?.paymentId)
      if(hasPaymentInfoAlready) return reject('Payment info already exists')
      const validatedData = this.validator.validateData(paymentInfo)
      const valid = validatedData.valid
      if (!valid) return reject(validatedData.error)
      await this.paymentService.isValid(paymentInfo?.paymentId).catch(e => reject('Payment Invalid'))
      return resolve(await this.paymentsInfoRepository.create(paymentInfo))
   })
  }
  findAById(idPayment: string): Promise<IPaymentsInfo> {
    return this.paymentsInfoRepository.findById(idPayment)
  }
  async findByPaymentId(idPayment: string): Promise<IPaymentsInfo>{
    return new Promise(async (resolve, reject) => {
        const payment = await this.paymentService.findAById(idPayment)
        if(payment){
          const paymentInfo = await this.paymentsInfoRepository.find({
            paymentId : payment?.id
          })
          return resolve(paymentInfo[0])
        }else{
          return reject("Payment not found")
        }
    })
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