import mongoose from "mongoose";
const PostCategorySchema = mongoose.Schema({
    Post_id:{type:String,required:true},
    Category_id:{type:String,required:true},
})
export default mongoose.model('PostCategory', PostCategorySchema);