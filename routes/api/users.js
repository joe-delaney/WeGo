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

var _ = require('lodash');
const { populate } = require("../../models/User");

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

                if(req.file) {
                    const result = await uploadFile(req.file)
                    newUser.profilePhotoPath = `/api/images/${result.Key}`
                    await unlinkFile(req.file.path)
                } 

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
        .populate({
            path: "allActivities",
            populate: {
                path: "tag"
            }
        })
        .populate({
            path: "chatGroups",
            populate: {
                path: "messages"
            }
        })
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
        aboutMe: req.user.aboutMe,
        profilePhotoPath: req.user.profilePhotoPath,
        extraPhotoPaths: req.user.extraPhotoPaths
    });
})

// Retrieve a specific user by id
router.get("/:id", (req, res) => {
    User.findById(req.params.id)
        .populate({
            path: "allActivities",
            populate: {
                path: "tag"
            }
        })
        .populate({
            path: "chatGroups",
            populate: {
                path: 'subscribers',
                select: ['fname', 'lname', 'profilePhotoPath']
            }
        })
        .populate({
            path: 'chatSubscriptions',
            populate: {
                path: 'chat',
                populate: {
                    path: "messages",
                    populate: {
                        path: 'author',
                        select: ['fname', 'lname', 'profilePhotoPath']
                    }
                }
            }
        })
        .then(user => res.json(JSON.parse(userShow(user))))
            .catch(err => 
                res.status(404).json({ nouserfound: "No user found with that ID" })
            );
        })


// Update a user profile
router.post("/:id", upload.single('image'), (req, res) => {
    User.findById(req.params.id)
        .then(async (user) => {
            if (!user) {
                return res.status(404).json({ nouserfound: "No user found with that ID" })
            } else {
                if(req.body.fname) user.fname = req.body.fname;
                if(req.body.lname) user.lname = req.body.lname
                user.pronouns = req.body.pronouns
                user.jobTitle = req.body.jobTitle
                user.education = req.body.education
                user.location = req.body.location
                if(req.body.aboutMe) user.aboutMe = req.body.aboutMe
                if (req.body.remove) user.profilePhotoPath = "/api/images/41daf94ffdccb355db7a624258d02f60"

                if(req.file) {
                    const result = await uploadFile(req.file)
                    user.profilePhotoPath = `/api/images/${result.Key}`
                    await unlinkFile(req.file.path)
                } 

                if(req.body.attendedActivity) {
                    user.attendedActivities.push(req.body.attendedActivity);
                    user.allActivities.push(req.body.attendedActivity);
                }
                if(req.body.hostedActivity) {
                    user.hostedActivities.push(req.body.hostedActivity);
                    user.allActivities.push(req.body.hostedActivity);
                }
                
                if(req.body.fromRequesterGroupId) {
                    if (_.includes(user.chatGroups, req.body.fromRequesterGroupId)) {
                        user.chatSubscriptions = [{chat: req.body.fromRequesterGroupId, read: true}].concat(_.filter(user.chatSubscriptions, obj => !(_.isEqual(obj.chat, req.body.fromRequesterGroupId))
                    ))} else {
                        user.chatGroups.push(req.body.fromRequesterGroupId)
                        user.chatSubscriptions.push({chat: req.body.fromRequesterGroupId, read: true})
                    }
                }

                if(req.body.fromHostChatGroupId) {
                    if (_.includes(user.chatGroups, req.body.fromHostChatGroupId)) {
                        user.chatSubscriptions = [{chat: req.body.fromHostChatGroupId, read: false}].concat(_.filter(user.chatSubscriptions, obj => !(_.isEqual(obj.chat, req.body.fromHostChatGroupId))
                    ))} else {
                        user.chatGroups.push(req.body.fromHostChatGroupId)
                        user.chatSubscriptions.push({chat: req.body.fromHostChatGroupId, read: false})
                    }
                }
                
                
                user.save().then(user => {
                    User.findById(user.id)
                        .populate({
                            path: "allActivities",
                            populate: {
                                path:"tag"
                            }
                        })
                        .populate({
                            path: "chatGroups",
                            populate: {
                                path: "messages"
                            }
                        })
                        .then(populatedUser => res.json(JSON.parse(userShow(populatedUser))));
                })
            }
        })
})

router.post('/:id/upload', upload.single('image'), async (req, res) => {
    User.findById(req.params.id)
        .then( async user => {
            if (!user) {
                return res.status(404).json({ nouserfound: "No user found with that ID" })
            } else {
                if(req.file) {
                    const result = await uploadFile(req.file);
                    await unlinkFile(req.file.path);
                    user.extraPhotoPaths.push(`/api/images/${result.Key}`);
                    await user.save()
                    User.findById(user.id)
                        .populate({
                            path: "allActivities",
                            populate: {
                                path: "tag"
                            }
                        })
                        .populate({
                            path: "chatGroups",
                            populate: {
                                path: "messages"
                            }
                        })
                        .then(populatedUser => res.json(JSON.parse(userShow(populatedUser))));
                }
            }
        })
});

router.patch('/:id/delete', (req, res) => {
    User.findById(req.params.id)
        .then( user => {
            if (!user) {
                return res.status(404).json({ nouserfound: "No user found with that ID" })
            } else {
                user.extraPhotoPaths = user.extraPhotoPaths.filter(el => el !== req.body.photo)
                user.save().then(user => {
                    User.findById(user.id)
                        .populate({
                            path: "allActivities",
                            populate: {
                                path: "tag"
                            }
                        })
                        .populate({
                            path: "chatGroups",
                            populate: {
                                path: "messages"
                            }
                        })
                        .then(populatedUser => res.json(JSON.parse(userShow(populatedUser))));
                })
            }
        })
});




module.exports = router;