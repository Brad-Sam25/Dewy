const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../../models/User');

const authMiddleware = require('../../middleware/auth');


require('dotenv').config();

const secret = process.env.JWT_SECRET;


// POST api/auth
router.post('/', (req, res) => {
    const { email, password } = req.body;

    if(!email || !password) {
        return res.status(400).json({ msg: 'Please fill out the respective fields.' });
    }

    //Check for existing user
    User.findOne({ email })
    .then( user => {
        if(!user) {
            return res.status(400).json({ msg: 'No account with this user exists' });
        }

        //validate passwords
        bcrypt.compare(password, user.password)
          .then(isMatch => {
            if(!isMatch) {
              return res.status(400).json({ msg: 'Invalid credentials' })
            }
            
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
          })
        
    })
});

//@rout GET api/auth/user
//@desc get user data
//@access Private

router.get('/user', authMiddleware, (req, res) => {
    User.findById(req.user.id)
    .select('_password')
    .then(user => res.json(user));
})



module.exports = router;
