import { Product } from "../models/productModel.js";

export const createProduct = async(req, res, next) => {
    try {
        const { name, price, quantity } = req.body;
    
        const product = await Product.create({ name, price, quantity });
    
        res.status(200).json({ product });
    } catch(error) {
        res.status(400).json({ error: error.message });
    }
}

export const getProducts = async(req, res, next) => {
    try {
        const products = await Product.find();

        res.status(200).json({ products });
    } catch(error) {
        res.status(400).json({ error: error.message });
    }
}