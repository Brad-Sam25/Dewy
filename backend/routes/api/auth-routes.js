const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../../models/User');

const authMiddleware = require('../../middleware/auth');


require('dotenv').config();

const secret = process.env.JWT_SECRET;

//POST api/auth/register
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    if(!name ||!email || !password) {
        return res.status(400).json({ msg: 'Please fill out the respective fields.' });
    }

    try {
        const user = await User.findOne({ email });
        if(user) throw Error('An account with this user already exists');

        const salt = await bcrypt.genSalt(10);
        if (!salt) throw Error('An error occurred with bcrypt');

        const hash = bcrypt.hash(password, salt);
        if (!hash) throw Error('Password could not be hashed');

        const newUser = new User ({
            name,
            email,
            password:hash
        });

        const savedUser = await newUser.save();
        if (!savedUser) throw Error('The user could not be saved');

        const token = jwt.sign({ id: savedUser.id }, secret, { expiresIn: 3600});

        res.status(200).json({
            token,
            user: {
                id: savedUser.id,
                name: savedUser.name,
                email: savedUser.email
            }
        })
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
});


// POST api/auth/login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if(!email || !password) {
        return res.status(400).json({ msg: 'Please fill out the respective fields.' });
    }

    try {
        const user = await User.findOne({ email });
        if(!user) throw Error('No account with this user exists');

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) throw Error('The credentials you have entered is incorrect');

        const token = jwt.sign(
            { id: user.id },
            secret,
            { expiresIn: 3600 });
        if (!token) throw Error('token could not be signed');

        res.status(200).json({
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        })
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
});


router.get('/user', authMiddleware, async(req, res) => {
    try {
        const user = User.findById(req.user.id)
        .select('_password');
        res.json(user);
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
    
})



module.exports = router;
