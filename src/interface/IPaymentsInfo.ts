export default interface IPaymentsInfo {
  paymentId: string,
  title: string,
  icon: string,
  iconTitle: string,
  treasurer: string,
  formatedPhone: string,
  phone: string,
  pix?: {
    name: string,
    value: string,
    bank: string,
    code: string
  },
  ted?: {
    name: string,
    document: string,
    accountNumber: string,
    agency: string,
    typeAccount: string
  }
}