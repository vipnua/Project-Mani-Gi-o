
import User from "../models/auth";
// import jwt from "jsonwebtoken";
const jwt = require("jsonwebtoken");
import { Request, Response } from 'expRess';

export const signup = async (Req: Request, Res: Response) => {

    try {
        const existEmail = await User.findOne({ email: Req.body.email }).exec();
        if (existEmail) {
            return Res.status(400).json({
                message: "Email đã tồn tại",
            });
        }

        const user = await new User(Req.body).save();
        console.log(user);
        return Res.status(200).json({
            user: {
                email: user.email,
                name: user.name,
                phone: user.phone,
                role: user.role,
            },
        });
    } catch (error) {
        return Res.status(400).json({
            message: "Dang ky khong thanh cong",
            error,
        });
    }
};

export const signin = async (Req: Request, Res: Response) => {

    try {
        const user = await User.findOne({ email: Req.body.email }).exec();
        if (!user) {
            return Res.status(400).json({
                message: "Email không tồn tại",
            });
        }

        // if (!user.authenticate(Req.body.password)) {
        //     return Res.status(400).json({
        //         message: "Sai mat khau",
        //     });
        // }
        const token = jwt.sign({ id: user._id }, "123456");
        return Res.status(200).json({
            token,
            user: {
                id: user._id,
                email: user.email,
            },
        });
    } catch (error) {
        return Res.status(400).json({
            message: "Dang nhap ko thanh cong",
            error,
        });
    }
};