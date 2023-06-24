import { User } from "../models/userModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const userLoginController = async(req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        console.log('user:', user);

        if (!user) {
            return res.status(401).json({ error: "Invalid login credentials" });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ error: "Invalid login credentials" });
        }

        const secret = process.env.JWT_SECRET

        const token = jwt.sign({ _id: user._id }, secret);

        res.status(200).json({ token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const userRegisterController = async(req, res, next) => {
    try {
        const { email, password, userName } = req.body;

        const user = await User.findOne({ email });

        console.log("user", user)

        if(user) {
            return res.status(409).json({ error: 'User with this email already exist!'})
        }

        const saltRounds = 10;

        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = await User.create({ email, password: hashedPassword, userName })

        res.status(200).json({ newUser });
    } catch(error) {
        res.status(400).json({ error: error.message });
    }
}