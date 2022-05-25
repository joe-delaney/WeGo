const express = require("express");
const router = express.Router();
const Message = require('../../models/Message');
const ChatGroup = require('../../models/ChatGroup');
const validText = require("../../validation/valid-text");
const userShow = require("../../jbuilder/users");
const User = require('../../models/User');

var _ = require('lodash');
const { updateOne } = require("../../models/ChatGroup");

// userId
// chatGroupId
// text
router.post("/", async (req, res) => {
    console.log('in message')
    const host = await User.findById(req.body.hostId)
    const chatGroup = await ChatGroup.findById(req.body.chatGroupId).populate('subscribers')
    const newMessage = new Message({
        text: req.body.text,
        author: req.body.senderId,
        chatGroup: req.body.chatGroupId
    })
    await newMessage.save()

    console.log('after message save')
    console.log(newMessage)

    await ChatGroup.findByIdAndUpdate(req.body.chatGroupId, {$push: {messages: newMessage._id}})
    await User.findByIdAndUpdate(req.body.senderId, {$pull:{chatGroups: req.body.chatGroupId}})
    await User.findByIdAndUpdate(req.body.senderId, {$pull:{chatSubscriptions: {chat: req.body.chatGroupId}}})
    await User.findByIdAndUpdate(req.body.senderId, {$push:{chatGroups: req.body.chatGroupId}})
    await User.findByIdAndUpdate(req.body.senderId, {$push:{chatSubscriptions: {chat: req.body.chatGroupId, read: true}}})

    chatGroup.subscribers.forEach( async sub => {
        console.log(sub.id)
        if (sub.id !== req.body.senderId) {
            await User.findByIdAndUpdate(sub.id, {$pull:{chatGroups: req.body.chatGroupId}})
            await User.findByIdAndUpdate(sub.id, {$pull:{chatSubscriptions: {chat: req.body.chatGroupId}}})
            await User.findByIdAndUpdate(sub.id, {$push:{chatGroups: req.body.chatGroupId}})
            await User.findByIdAndUpdate(sub.id, {$push:{chatSubscriptions: {chat: req.body.chatGroupId, read: false}}})
        }
    });

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

// mark a message as read
// chatGroupId
// userId
router.post('/read', async (req, res) => {
    await User.updateOne({id: req.body.userId, 'chatSubscriptions.chat': req.body.chatGroupId}, {"chatSubscriptions.$": {chat:req.body.chatGroupId, read: true}})
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

module.exports = router;