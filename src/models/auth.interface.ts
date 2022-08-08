import { Document } from "mongoose";

export default interface user extends Document {
    name: String;
    email: String;
    password: string;
    role: Number;
    encrytPassword: (pw: string) => Promise<boolean>;
}