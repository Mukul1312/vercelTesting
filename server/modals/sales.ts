// Path: server/modals/sales.js
import mongoose, { Document, Model, Schema } from "mongoose";

interface ISchema {
  saleDate: Date;
  items: [
    {
      name: string;
      tags: string[];
      price: number;
      quantity: number;
    }
  ];
  storeLocation: string;
  customer: {
    gender: string;
    age: number;
    email: string;
    satisfaction: number;
  };
  couponUsed: boolean;
  purchaseMethod: string;
}

export interface UserDocument extends ISchema, Document {}

export interface UserModel extends Model<UserDocument> {
  build(args: ISchema): UserDocument;
}

const SalesSchema: Schema<UserDocument> = new Schema({
  saleDate: Date,
  items: [
    {
      name: String,
      tags: [String],
      price: Number,
      quantity: Number,
    },
  ],
  storeLocation: String,
  customer: {
    gender: String,
    age: Number,
    email: String,
    satisfaction: Number,
  },
  couponUsed: Boolean,
  purchaseMethod: String,
});

const Sales = mongoose.model<UserDocument, UserModel>("Sales", SalesSchema);

SalesSchema.statics.build = (args: ISchema) => {
  return new Sales(args);
};

export default Sales;
