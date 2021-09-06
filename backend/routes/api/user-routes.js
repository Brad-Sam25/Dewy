const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../../models/User');

const authMiddleware = require('../../middleware/auth');

require('dotenv').config();

const secret = process.env.JWT_SECRET;


// POST api/users
router.post('/', (req, res) => {
    const { name, email, password } = req.body;

    if(!name || !email || !password) {
        return res.status(400).json({ msg: 'Please fill out the respective fields.' });
    }

    //Check for existing user
    User.findOne({ email })
    .then( user => {
        if(user) {
            return res.status(400).json({ msg: 'An account with this user already exists' });
        }

        const newUser = new User({
            name,
            email,
            password
        });

        //creat salt & hash
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if(err) throw err;
                newUser.password = hash;
                newUser.save()
                    .then( user => {
                        jwt.sign(
                            { id: user.id },
                            secret,
                            { expiresIn: 3600 },
                            (err, token) => {
                                if(err) throw err;
                                res.json({
                                    token,
                                    user: {
                                        id: user.id,
                                        name: user.name,
                                        email: user.email
                                    }
                                })
                            }
                            
                        )

                    });
            })
        })
    })
});

module.exports = router;