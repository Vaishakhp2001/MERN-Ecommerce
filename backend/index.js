import express from "express";
import { config } from "dotenv";
import cors from 'cors';
import { connectDb } from "./config/db.js";
import userRouter from "./routes/userRoutes.js";
import productRouter from './routes/productRoutes.js';
import cartRouter from './routes/cartRoutes.js'

const app = express();
config();
connectDb();

app.use(cors());
app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})