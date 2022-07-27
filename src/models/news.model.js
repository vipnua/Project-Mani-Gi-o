const mongoose =require ('mongoose');
// const schema = mongoose.Schema();

const post_schema = mongoose.Schema({
    Author_id: {type:String, required: true,},//Id tác giả để xác định tác giả bài.
    Title: {type:String, required: true,},//Title bài viết
    Meta_Title: {type:String},//Title trình duyệt và bài viết và SEO
    Slug:{type:String, required: true,},//Slug để tạo trên Url (cho ông nào ko biết thì đây đơn giản là nó sẽ biến thành kiểu snake case)
    Summary:{type:String},//Tóm tắt của bài viết để đề cập đến những điểm nổi bật chính.
    Published:{type:Boolean,default:true},//Xác định xem bài viết có public hay ko
    Content:{type:String,default:null},
});
const category_schema = mongoose.Schema({
    Category_name: {type:String,default:null},
    Published:{type:Boolean,default:true},//ẩn category
});
const comment_post_Schema = mongoose.Schema({
    Category_name: {type:String,default:null},
    Published:{type:Boolean,default:true},//ẩn category
})

module.exports = mongoose.model('post',post_schema);
module.exports = mongoose.model('category',category_schema);
module.exports = mongoose.model('commentpost',comment_post_Schema);