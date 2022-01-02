import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/User.js";

import 'dotenv/config';

const secret = process.env.JWT_SECRET;

export const signin = async(req, res) => {
    const {email, password} = req.body;

    try {

        const newUser = await User.findOne({ email });

        if (!newUser) return res.status(404).json({ message: "User does not exist" });

        const isPasswordCorrect = await bcrypt.compare(password, newUser.password);

        if(!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ email: newUser.email, id: newUser._id}, secret, { expiresIn: "1h" });

        res.status(200).json({ result: newUser, token });
    } catch (error) {
        res.status(500).json({ message: "An error has occurred" });
    }
};

export const signup = async (req, res) => {
    const { email, password, firstName, lastName } = req.body;

    try {
        const newUser = await User.findOne({ email });

        if(newUser) return res.status(400).json({  message: "User already exists" });

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await User.create({email, password: hashedPassword, name: `${firstName} ${lastName}`});

        const token = jwt.sign({ email: result.email, id: result._id}, secret, { expiresIn: "1h" });

        res.status(201).json({ result, token});
    } catch (error) {
        res.status(500).json({  message: "An error has occurred" });

        console.log(error);
    }
}