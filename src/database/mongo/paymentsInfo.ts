import mongoose, { Schema } from 'mongoose';

const PaymentsInfoSchema = new Schema({
  paymentId: String,
  title: String,
  icon: String,
  treasurer: String,
  formatedPhone: String,
  phone: String,
  pix: {
    name: String,
    value: Number,
    bank: String,
    code: String
  },
  ted: {
    name: String,
    document: String,
    accountNumber: Number,
    agency: Number,
    typeAccount: String
  }
},{
  timestamps: true
})

export default mongoose.model('paymentsInfo', PaymentsInfoSchema)

