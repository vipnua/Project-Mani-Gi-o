import express from "express"
import { Add, Delete, list, Read, Update } from "../controllers/post.controller";
const route = express.Router();

route.get('/', list);
route.get('/post/:id', Read);
route.post('/add-post', Add);
route.delete('/delete-post/:id', Delete);
route.patch('/update-post/:id', Update);

module.exports = route;