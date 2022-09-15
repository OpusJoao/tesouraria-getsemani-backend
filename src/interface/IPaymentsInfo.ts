export default interface IPaymentsInfo {
  paymentId: string,
  title: string,
  icon: string,
  treasurer: string,
  formatedPhone: string,
  phone: string,
  pix?: {
    name: string,
    value: Number,
    bank: string,
    code: string
  },
  ted?: {
    name: string,
    document: string,
    accountNumber: Number,
    agency: Number,
    typeAccount: string
  }
}