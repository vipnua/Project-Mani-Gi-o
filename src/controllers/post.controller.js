import postModel from "../models/news.model";
export const list = async (req, res) => {
    try {
        const data = await postModel.post.find();
        res.json(data);
    } catch (error) {
        res.status(400).json({
            error: "Không có Post nào",
        });
    }
};