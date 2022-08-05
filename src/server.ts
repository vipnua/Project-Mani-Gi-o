const express =require('express');
const cors = require('cors');
const app = express();
import 'dotenv/config';
const morgan =require('morgan')
import productRouter from "./routes/product.route";
import userRouter from "./routes/auth.route"
import mongoose from 'mongoose';
var bodyParser = require('body-parser');

app.use(bodyParser.json({limit:'50mb'}));

app.use(cors());
app.use(morgan('common'));
app.use(express.json());

mongoose.connect("mongodb+srv://we17101:manigiao@we17101.w9h0nyn.mongodb.net/We17101", () => {
    console.log("Successfully")});
    app.use("/api",productRouter)
    app.use('/api',userRouter)
app.listen(process.env.port,()=>{
    console.log(`is running port ${process.env.PORT}`);
  })