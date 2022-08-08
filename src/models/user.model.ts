import mongoose from 'mongoose';
//  import { BinaryLike, createHmac } from "crypto";
import user from './user.interface';
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 225
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    role: {
        type: Number,
        default: 0,
    },
    
},{ timestamps: true });

// userSchema.methods = {
//     authenticate(password: any){
//         return this.password === this.encrytPassword(password);
//     },
//     encrytPassword: (password: BinaryLike) => {
//         if(!password) return;
//         try {
//             return createHmac('sha256','abc').update(password).digest("hex");
//         } catch (error) {
//             console.log(error);
//         }
//     }

// };

// userSchema.pre("save", function (next) {
//     this.password = this.encrytPassword(this.password);
//     next();
// });

export default mongoose.model<user>("User", userSchema);