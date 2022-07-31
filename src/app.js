// const express = require("express");
import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import AuthRouter from './routes/auth.route'
import postRouter from './routes/post.route'

const app = express();

// middleware
app.use(cors());
app.use(express.json());


// connect db

mongoose.connect("mongodb://localhost:27017/trangtin", () => {
    console.log("Successfully")});

app.use("/api", AuthRouter);
app.use("/api", postRouter);

app.listen(process.env.PORT, () => {
    console.log("Kết nối thành công, cổng " + process.env.PORT);
});
