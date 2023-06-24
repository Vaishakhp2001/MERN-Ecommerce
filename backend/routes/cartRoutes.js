import express from 'express';
import { addToCart, getCartProducts, removeProduct } from '../controllers/cartController.js';
import { authMiddleware } from '../middlewares/auth.js'

const router = express.Router();

router.route('/add').post(authMiddleware, addToCart);
router.route('/get').get(authMiddleware, getCartProducts);
router.route('/remove').put(authMiddleware, removeProduct);

export default router;
