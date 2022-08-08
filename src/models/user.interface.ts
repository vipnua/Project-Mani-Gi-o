import { Document } from "mongoose";

export default interface cellphone extends Document {
    phone : string,
    email :string,
    password: string,
    role? :number
}