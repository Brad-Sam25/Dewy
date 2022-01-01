import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/User.js";

import 'dotenv/config';

const secret = process.env.JWT_SECRET;

export const signin = async(req, res) => {
    const {email, password} = req.body;

    try {
        //We are first going to determine if the user exists in the db by comparing the user's email with the emails already in the in the db
        const newUser = await User.findOne({ email });

        // If we cannot find the provided email in our db then we return a 404 and a message 
        if (!newUser) return res.status(404).json({ message: "User does not exist" });

        // However if the email is found, we then compare the password with the provided password
        const isPasswordCorrect = await bcrypt.compare(password, newUser.password);

        // If the password does not compare with the password already in the db then we return status code 400 and a message
        if(!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

        // If both the email and the password matches what is in the db then we are going to get the jwt to send to the frontend
        const token = jwt.sign({ email: newUser.email, id: newUser._id}, secret, { expiresIn: "1h" });

        // Now we return the result 
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