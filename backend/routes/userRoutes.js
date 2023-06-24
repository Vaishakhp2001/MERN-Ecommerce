import express from 'express';
import { userLoginController, userRegisterController } from '../controllers/userController.js';

const router = express.Router();

router.route('/login').post(userLoginController);
router.route('/register').post(userRegisterController);

export default router;
