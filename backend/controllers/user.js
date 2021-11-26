import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/User.js";

import 'dotenv/config';

const secret = process.env.JWT_SECRET;

export const signin = async(req, res) => {
    const {email, password} = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) return res.status(404).json({ message: "User does not exist" });

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if(!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ email: user.email, id: user._id}, secret, { expiresIn: "1h" });

        res.status(200).json({ result: user, token });
    } catch (error) {
        res.status(500).json({ message: "An error has occurred" });
    }
};

export const signup = async (req, res) => {
    const { email, password, firstName, lastName } = req.body;

    try {
        const user = await User.findOne({ email });

        if(user) return res.status(400).json({  message: "User already exists" });

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await User.create({email, password: hashedPassword, name: `${firstName} ${lastName}`});

        res.status(201).json({ result, token});
    } catch (error) {
        res.status(500).json({  message: "An error has occurred" });

        console.log(error);
    }
}