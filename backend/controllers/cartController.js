import { Cart } from "../models/cartModel.js";
import { Product } from "../models/productModel.js";

export const addToCart = async (req, res, next) => { 
  try {
    const { productId } = req.body;
    const product = await Product.findById(productId);
    const userCart = await Cart.findOne({ userId: req.user._id });
    console.log("userCart", userCart);
    if(userCart?.products?.some(obj => JSON.stringify(obj.productId) === JSON.stringify(product._id))) {
        return res.status(409).json({ error: 'this product is already added to cart'})
    }
    if (product && (product.quantity > 0)) {
      const newProduct = {
        productId,
        name: product.name,
        price: product.price,
      };
      if (!userCart) {
        await Cart.create({ userId: req.user._id, products: newProduct });
      } else {
        await Cart.findOneAndUpdate(
          { userId: req.user._id },
          { $push: { products: newProduct } },
          { new: true }
        );
      }
      product.quantity = product.quantity - 1;
      await product.save();

      res.status(200).json(product);
    }
  } catch (error) {
    console.log('error', error)
    res.status(400).json({ error: error.message });
  }
};

export const getCartProducts = async (req, res, next) => {
  try {
    const products = await Cart.findOne({ userId: req.user._id });
    res.status(200).json({ products });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const removeProduct = async (req, res, next) => {
  try {
    const { productId } = req.body;
    console.log('productId', productId);
    const product = await Product.findById(productId);
    console.log("product", product)
    if (product) {
      const cart = await Cart.findOneAndUpdate(
        { userId: req.user._id },
        { $pull: { products: { productId: product._id } } },
        { new: true }
      );

      product.quantity = product.quantity + 1;
      await product.save();
      res.status(200).json({ cart });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
