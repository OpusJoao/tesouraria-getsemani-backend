import IPayments from "../interface/IPayments";
import IPaymentsRepository from "../interface/IPaymentsRepository";

export default class PaymentsRepository implements IPaymentsRepository{
  create(): Promise<IPayments> {
    throw new Error("Method not implemented.");
  }
  findAll(): Promise<IPayments[]> {
    throw new Error("Method not implemented.");
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