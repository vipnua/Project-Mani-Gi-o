import mongoose from "mongoose";
const categorySchema = mongoose.Schema({
    Parent_id:{type:String,required:true},
    Title:{type:String,required:true}, //tiêu đề của category
    Meta_Title:{type:String,required:true},//The meta title to be used for browser title and SEO.
    Slug:{type:String, required: true,},//Slug để tạo trên Url (cho ông nào ko biết thì đây đơn giản là nó sẽ biến thành kiểu snake case)
    Content:{type:String,default:null},//Cột được sử dụng để lưu trữ dữ liệu danh mục.
})