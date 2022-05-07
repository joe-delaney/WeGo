const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');

//User sign up backend route
router.post('/signup', (req, res) => {
    // Check to make sure nobody has already signed up with a duplicate email
    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                // Throw a 400 error if the email address already exists
                return res.status(400).json({ email: "A user has already registered with this address" })
            } else {
                // Otherwise create a new user
                const newUser = new User({
                    email: req.body.email,
                    password: req.body.password,
                    fname: req.body.fname,
                    lname: req.body.lname,
                    age: req.body.age,
                    pronouns: req.body.pronouns,
                    jobTitle: req.body.jobTitle,
                    education: req.body.education,
                    interests: req.body.interests
                })

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err));
                    })
                })
            }
        })
})

// User login backend route
router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email })
        .then(user => {
            if (!user) {
                return res.status(404).json({ email: 'This user does not exist' });
            }

            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        const payload = { id: user.id, handle: user.handle };

                        jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                            res.json({
                                success: true,
                                token: "Bearer " + token
                            });
                        });
                    } else {
                        errors.password = "Incorrect password";
                        return res.status(400).json(errors);
                    }
                })
        })
})


module.exports = router;