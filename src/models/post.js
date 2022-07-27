import mongoose from "mongoose";
const PostSchema =mongoose.Schema(
    {
        Author_id: {type:String, required: true,},//Id tác giả để xác định tác giả bài.
        Parent_id: {type:String, required: true,},//Id cha để xác định bài viết cha. Nó có thể được sử dụng để tạo thành bảng nội dung của bài viết gốc của loạt.
        Title: {type:String, required: true,},//Title bài viết
        Meta_Title: {type:String},//Title trình duyệt và bài viết và SEO
        Slug:{type:String, required: true,},//Slug để tạo trên Url (cho ông nào ko biết thì đây đơn giản là nó sẽ biến thành kiểu snake case)
        Summary:{type:String},//Tóm tắt của bài viết để đề cập đến những điểm nổi bật chính.
        Published:{type:Boolean,default:true},//Xác định xem bài viết có public hay ko
        Create_At:{type:Date},
        Update_At:{type:Date},
        Published_At:{type:Date},
        Content:{type:String,default:null},
    }
);
export default mongoose.model('Post',PostSchema);