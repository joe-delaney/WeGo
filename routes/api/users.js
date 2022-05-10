const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const validateSignupInput = require('../../validation/signup');
const validateLoginInput = require('../../validation/login');
const userShow = require('../../jbuilder/users');

const multer  = require('multer');
const { uploadFile } = require("../../s3");
const upload = multer({ dest: 'images/' })
const fs = require('fs')
const util = require('util')
const unlinkFile = util.promisify(fs.unlink)

//User sign up backend route
router.post('/signup', upload.single('image'), async (req, res) => {
    const { errors, isValid } = validateSignupInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    // Check to make sure nobody has already signed up with a duplicate email
    User.findOne({ email: req.body.email })
        .then( async (user) => {
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
                    aboutMe: req.body.aboutMe
                })
                // upload images to server
                // const uploadPromises = []
                // for (let i = 0; i < req.files.length; i++) {
                //     uploadPromises.push(uploadFile(req.files[i]))
                // }
                // await Promise.all(uploadPromises)

                // const unlinkPromises = []
                // for (let i = 0; i < req.files.length; i++) {
                //     unlinkPromises.push(unlinkFile(req.files[i].path))
                // }
                // await Promise.all(unlinkPromises)

                const result = await uploadFile(req.file)
                await unlinkFile(req.file.path)


                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser
                            .save()
                            .then(user => {
                                const payload = { id: user.id, handle: user.handle };

                                jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                                    res.json({
                                        success: true,
                                        token: "Bearer " + token,
                                        user: JSON.parse(userShow(newUser))
                                    });
                                });
                            })
                            .catch(err => console.log(err));
                    });
                });
            }
        })
})

// User login backend route
router.post('/login', (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

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
                                token: "Bearer " + token,
                                user: JSON.parse(userShow(user))
                            });
                        });
                    } else {
                        errors.password = "Incorrect password";
                        return res.status(400).json(errors);
                    }
                })
        })
})

// Protected route for the current user
router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({
        id: req.user.id,
        email: req.user.email,
        password: req.user.password,
        fname: req.user.fname,
        lname: req.user.lname,
        age: req.user.age,
        pronouns: req.user.pronouns,
        jobTitle: req.user.jobTitle,
        education: req.user.education,
        aboutMe: req.user.aboutMe
    });
})

// Retrieve a specific user by id
router.get("/:id", (req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(JSON.parse(userShow(user))))
        .catch(err => 
            res.status(404).json({ nouserfound: "No user found with that ID" })
        );
});

// Update a user profile
router.post("/:id", (req, res) => {
    User.findById(req.params.id)
        .then(user => {
            if (!user) {
                return res.status(404).json({ nouserfound: "No user found with that ID" })
            } else {
                if(req.body.fname) user.fname = req.body.fname;
                if(req.body.lname) user.lname = req.body.lname
                if(req.body.pronouns) user.pronouns = req.body.pronouns
                if(req.body.jobTitle) user.jobTitle = req.body.jobTitle
                if(req.body.education) user.education = req.body.education
                if(req.body.aboutMe) user.aboutMe = req.body.aboutMe
                user.save().then(user => res.json(JSON.parse(userShow(user))));
            }
        })
})


module.exports = router;