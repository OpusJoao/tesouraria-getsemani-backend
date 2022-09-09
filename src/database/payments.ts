import mongoose, { Schema } from "mongoose";

const PaymentsSchema = new Schema({
  title: String,
  img: String
},{
  timestamps: true
})

export default mongoose.model('payments', PaymentsSchema)