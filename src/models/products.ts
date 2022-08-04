export class Product {
    name: String;
    originalPrice: Number;
    sellerPrice: Number;
    description?: String;
    longDescription?: String;
    category: String;
    images: any;
    id?: Number;
    constructor(name: String, originalPrice: Number, sellerPrice: Number, description: String, longDescription: String, category: String, images: any) {
        this.name = name;
        this.originalPrice = originalPrice;
        this.sellerPrice = sellerPrice;
        this.description = description;
        this.longDescription = longDescription;
        this.category = category;
        this.images = images;
    }


}
import cellphone from './product.interface';
import mongoose from 'mongoose';
const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true, },//Tên product
    originalPrice: { type: Number, required: true, },//Giá gốc
    sellerPrice: { type: Number },//Giá khuyến mãi
    description: { type: String },//tiêu đề
    longDescription: { type: String },//Tiêu đề dài
    category: { type: String, required: true },//Loại
    images: { type: Array, required: true },
    id: { type: Number }
},
    {
        timestamps: true
    });

export default mongoose.model<cellphone>('Product', ProductSchema)