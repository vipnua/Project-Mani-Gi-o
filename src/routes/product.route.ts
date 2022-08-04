const express = require('express');
import { list, Read, Add, Delete, Update } from '../controllers/product.controller';
const router = express.Router();

router.get("/product", list);
router.get('/product/:id', Read);
router.post('/product', Add);
router.delete('/product/:id', Delete);
router.patch('/product/:id', Update);

export default router;