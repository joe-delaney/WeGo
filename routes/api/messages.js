const express = require("express");
const router = express.Router();
const Message = require('../../models/Message');
const ChatGroup = require('../../models/ChatGroup');
const validText = require("../../validation/valid-text");

var _ = require('lodash');

router.post("/", (req, res) => {
    let user = User.findById(req.body.userId)
    if (!user) {return res.status(404).json({ nouserfound: "No user found with that ID" })}
    let chatGroup = ChatGroup.findById(req.body.chatGroupId).populate('subscribers')
    if (!chatGroup) {return res.status(404).json({ nochatfound: "No chat found with that ID" })}
    if (!validText(req.body.text)){return res.status(400).json({ invalidmessage: "Invalid message" })}
    const newMessage = new Message({
        text: req.body.text,
        author: req.body.userId,
        chatGroup: req.body.chatGroupId
    })
    user.chatSubscriptions = [{chat: req.body.chatGroupId, read: true}].concat(_.filter(user.chatSubscriptions, obj => !(_.isEqual(obj.chat, req.body.chatGroupId))))
    user.save()
    chatGroup.subscribers.forEach( sub => {
        if (sub._id !== user.id ) {
            sub.chatSubscriptions = [{chat: req.body.chatGroupId, read: false}].concat(_.filter(sub.chatSubscriptions, obj => !(_.isEqual(obj.chat, req.body.chatGroupId))))
            sub.save()
        }
    });
    newMessage.save().then( () => {
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
            .then(populatedUser => res.json(JSON.parse(userShow(populatedUser))))})})

// mark a message as read chatGroupId and userId
router.post('/read', (req, res) => {
    let user = User.find(req.body.userId)[0]
    if (!user) {return res.status(404).json({ nouserfound: "No user found with that ID" })}
    let chatGroup = ChatGroup.findById(req.body.chatGroupId).populate('subscribers')
    if (!chatGroup) {return res.status(404).json({ nochatfound: "No chat found with that ID" })}
    user.chatSubscriptions = [{chat: req.body.chatGroupId, read: true}].concat(_.filter(user.chatSubscriptions, obj => !(_.isEqual(obj.chat, req.body.chatGroupId))))
    user.save().then( user => {
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
            .then(populatedUser => res.json(JSON.parse(userShow(populatedUser))))})})

module.exports = router;