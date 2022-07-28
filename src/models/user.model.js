const mongoose =require ('mongoose');
import { createHmac } from "crypto";

const userSchema = mongoose.Schema(
    {
        First_Name: {
            type: String, // họ
        },
        Middle_Name: {
            type: String, //tên đệm
        },
        Last_Name: {
            type: String,//tên
            required: true,
        },
        Mobile: {
            type: String,//số đt
        },
        Email: {
            type: String, //mail
            required: true,
        },
        password: {
            type: String,
            minlength: 6,
        },
        Intro:{
            type:String, // Giới thiệu về user
        },
        Profile:{
            type:String, // Chi tiết về tác user
        },
        role: {
            type: Number,
            default: 0,
        },
    },
   
);

// userSchema.methods = {
//     authenticate(password) {
//         console.log("2");
//         return this.password === this.encrytPassword(password);
//     },
//     encrytPassword: (password) => {
//         if (!password) return;
//         try {
//             return createHmac("sha256", "abc").update(password).digest("hex");
//         } catch (error) {
//             console.log(error);
//         }
//     },
// };

// userSchema.pre("save", function (next) {
//     this.password = this.encrytPassword(this.password);
//     next();
// });

module.exports = mongoose.model('User',userSchema);
