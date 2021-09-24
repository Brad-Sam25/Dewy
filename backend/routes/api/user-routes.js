const express = require('express');
const router = express.Router();

const User = require('../../models/User');


// GET api/users
router.get('/', async(req, res) => {
    try {
        const users = await User.find();
        if(!users) throw Error('There are no users');
        res.json(users);
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
});

module.exports = router;