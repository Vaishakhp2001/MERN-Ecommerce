import express from 'express';
import { createProduct, getProducts } from '../controllers/productController.js';

const router = express.Router();

router.route('/create').post(createProduct);
router.route('/get').get(getProducts);

export default router;