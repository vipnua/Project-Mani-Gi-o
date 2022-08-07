const express = require('express');
import { list, Read, Add, Delete, Update, Search, Searchbycate } from '../controllers/product.controller';
const router = express.Router();

router.get("/product", list);
router.get('/product/:id', Read);
router.post('/product', Add);
router.delete('/product/:id', Delete);
router.patch('/product/:id', Update);
router.post("/productq?", Search);
router.post("/product?", Searchbycate);

export default router;