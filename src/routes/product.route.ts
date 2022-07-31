import express from "express";
import { list, Read, Add, Delete, Update } from '../controllers/product.controller';
const router = express.Router();

router.get("/product", list);
router.get('/product/:id', Read);
router.post('/product/add', Add);
router.delete('/product/delete/:id', Delete);
router.patch('/product/update/:id', Update);

export default router;