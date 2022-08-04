import { Document } from "mongoose";

export default interface cellphone extends Document {
    name: String;
    originalPrice: Number;
    sellerPrice: Number;
    description?: String;
    longDescription?: String;
    category: String;
    images: any;
    id?: Number
}