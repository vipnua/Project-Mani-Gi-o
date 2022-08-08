import { Document } from "mongoose";

export default interface cellphone extends Document {
    name? : string,
    email :string,
    password: string,
    role? :number
}