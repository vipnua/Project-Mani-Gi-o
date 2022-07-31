import express from "express";
import { Add, Delete, list, Read, Update } from "../controllers/post.controller";
const router = express.Router();

router.get('/', list);
router.get('/post/:id', Read);
router.post('/add-post', Add);
router.delete('/delete-post/:id', Delete);
router.patch('/update-post/:id', Update);


export default router;