// const express = require("express");
import express from "express";
import cors from "cors";
import "dotenv/config";
import postRouter from './routes/post.route'
import AuthRouter from './routes/auth.route'
const mongoose = require("mongoose");

const app = express();

// middleware
app.use(cors());
app.use(express.json());



app.use("/api", AuthRouter);
app.use("/api", postRouter);

// connect db

// <<<<<<< HEAD
// const conn = mongoose.createConnection("mongodb://localhost:27017/trangtin");
// conn.on("connected", function () {
//     console.log(`kết nối thành công với mongoose ::: ${this.name}`);
// })
// conn.on('error', function (error) {
//     console.log(`MongooseError:: error: ${JSON.stringify(error)}`);
// });
// conn.on('disconnected', function () {
//     console.log(`MongooseError:: disconnected: ${this.name}`);
// });
// process.on('SIGINT', async () => {
//     await conn.close();
//     process.exit(0);
// })
// module.exports = conn;

// app.listen(process.env.PORT, () => {
//     console.log("Kết nối thành công, cổng " + process.env.PORT);
// });

mongoose.connect("mongodb://localhost:27017/trangtin", () => {
    console.log("successfully");
});

app.listen(process.env.PORT, () => {
    console.log("Kết nối thành công, cổng " + process.env.PORT);
});
