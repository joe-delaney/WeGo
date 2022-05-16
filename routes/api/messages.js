const express = require("express");
const router = express.Router();
const Message = require('../../models/Message');
const ChatGroup = require('../../models/ChatGroup');
const validText = require("../../validation/valid-text");
const userShow = require("../../jbuilder/users");
const User = require('../../models/User');

var _ = require('lodash');

router.post("/", async (req, res) => {
    // const user = await User.findById(req.body.userId)
    // if (!user) {return res.status(404).json({ nouserfound: "No user found with that ID" })}
    // let chatGroup = await ChatGroup.findById(req.body.chatGroupId).populate('subscribers')
    // if (!chatGroup) {return res.status(404).json({ nochatfound: "No chat found with that ID" })}
    // if (!validText(req.body.text)){return res.status(400).json({ invalidmessage: "Invalid message" })}
    // const newMessage = new Message({
    //     text: req.body.text,
    //     author: req.body.userId,
    //     chatGroup: req.body.chatGroupId
    // })
    // user.chatSubscriptions = [{chat: req.body.chatGroupId, read: true}].concat(_.filter(user.chatSubscriptions, obj => !(_.isEqual(obj.chat, req.body.chatGroupId))))
    // await user.save().then( async user => console.log('test'))
    // chatGroup.subscribers.forEach( async sub => {
    //     if (sub._id !== user.id ) {
    //         sub.chatSubscriptions = [{chat: req.body.chatGroupId, read: false}].concat(_.filter(sub.chatSubscriptions, obj => !(_.isEqual(obj.chat, req.body.chatGroupId))))
    //         await sub.save()
    //     }
    // });
    // newMessage.save().then( () => console.log('message sent'))})
    const newMessage = new Message({
        text: req.body.text,
        author: req.body.userId,
        chatGroup: req.body.chatGroupId
    })
    await newMessage.save().then( async message => {
        const user = await User.findById(req.body.userId)
        let newSubscriptions = [{chat: req.body.chatGroupId, read: true}].concat(_.filter(user.chatSubscriptions, obj => !(_.isEqual(obj.chat, req.body.chatGroupId))))
        User.updateOne({id: req.body.userId}, {subscriptions: newSubscriptions})
        ChatGroup.updateOne({id: req.body.chatGroupId}, {$push: {messages: message}})
    })
    User.findById(req.body.userId)
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

// mark a message as read chatGroupId and userId
router.post('/read', async (req, res) => {
    debugger
    const user = await User.findById(req.body.userId)
    if (!user) {return res.status(406).json({ nouserfound: "No user found with that ID" })}
    let chatGroup = await ChatGroup.findById(req.body.chatGroupId).populate('subscribers')
    console.log(req.body.chatGroupId)
    if (!chatGroup) {return res.status(405).json({ nochatfound: "No chat found with that ID" })}
    user.chatSubscriptions = [{chat: req.body.chatGroupId, read: true}].concat(_.filter(user.chatSubscriptions, obj => !(_.isEqual(obj.chat, req.body.chatGroupId))))
    await user.save()
    .then( async user => {
        await User.findById(user.id)
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
            .then(populatedUser => res.json(JSON.parse(userShow(populatedUser))))})})

module.exports = router;