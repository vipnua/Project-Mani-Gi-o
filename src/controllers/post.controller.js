import { Post } from "../models/news.model";
export const list = async (req, res) => {
    try {
        const Posts = await Post.find();
        res.json({
            Posts
        });
    } catch (error) {
        res.status(400).json({
            error: "Không có Post nào",
        });
    }
}

export const Read = async (req, res) => {
    try {
        const id = req.params.id
        const post = await Post.findOne({ _id: id }).exec()
        res.json(post)
    } catch (error) {
        res.status(400).json({
            error: "Không tìm thấy Post",
        });
    }
}

export const Add = async (req, res) => {
    try {
        const post = await new Post(req.body).save()
        res.json(post)
    } catch (error) {
        res.status(400).json({
            error: "Thêm không thành công",
        });
    }
}

export const Update = async (req, res) => {
    try {
        const id = req.params.id
        const post = await Post.findOneAndUpdate({ _id: id }, req.body, { new: true }).exec()
        res.json(post)
    } catch (error) {
        res.status(400).json({
            error: "Không thể sửa",
        });
    }
}

export const Delete = async (req, res) => {
    try {
        const id = req.params.id
        const postLists = await Post.find();
        const post = await Post.findOneAndDelete({ _id: id }).exec()
        res.json({
            postLists
        })
    } catch (error) {
        res.status(400).json({
            error: "Không thể sửa",
        });
    }
}