import mongoose from "mongoose";
const PostCommentTableSchema = mongoose.Schema({
    Post_id:{type:String,required:true},
    Parent_id:{type:String,required:true},
    Title: {type:String, required: true,},//Title bình luận
    Published:{type:Boolean,default:true},//Xác định xem bình luận có công khai ko
    Create_At:{type:Date},
    Update_At:{type:Date},
    Published_At:{type:Date},
    Content:{type:String,default:null},
})
export default mongoose.model('PostCommentTable', PostCommentTableSchema)