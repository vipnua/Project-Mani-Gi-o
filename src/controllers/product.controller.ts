import cellphone from '../models/products';
import { Request,Response } from 'express';
export const list = async (Req:Request,Res:Response) => {
    try{
        const product = await cellphone.find();
        Res.json({
            product
        })
        Req;
    }
    catch(error){
        Res.status(400).json({
            error: "Không có Product nào",
        });
    }
   
}
export const Read = async (Req:Request,Res:Response) => {
    try {
        const id = Req.params.id
        const product = await cellphone.findOne({ _id: id }).exec()
        Res.json(product)
    } catch (error) {
        Res.status(400).json({
            error: "Không tìm thấy Sản phẩm",
        });
    }
}

export const Add = async (Req:Request,Res:Response) => {
    try {
        const product = await new cellphone(Req.body).save()
        Res.json(product)
    } catch (error) {
        Res.status(400).json({
            error: "Thêm không thành công",
        });
    }
}

export const Update = async (Req:Request,Res:Response) => {
    try {
        const id = Req.params.id
        const product = await cellphone.findOneAndUpdate({ _id: id }, Req.body, { new: true }).exec()
        Res.json(product)
    } catch (error) {
        Res.status(400).json({
            error: "Không thể sửa",
        });
    }
}

export const Delete = async (Req:Request,Res:Response) => {
    try {
        const id = Req.params.id
        const productList = await cellphone.find();
        const product = await cellphone.findOneAndDelete({ _id: id }).exec()
        Res.json({
            productList,
            product
        })
    } catch (error) {
        Res.status(400).json({
            error: "Không thể xóa",
        });
    }
}