const express = require("express");
const router = express.Router();
const ChatGroup = require('../../models/ChatGroup');
const Message = require('../../models/Message');
const userShow = require("../../jbuilder/users");


var _ = require('lodash');

//create a new chat group
router.post("/", (req, res) => {
    let chatGroup = ChatGroup.find({'subscribers.id': {$all: [req.body.hostId, req.body.requesterId]}})[0]
    if (!chatGroup) {
        chatGroup = new ChatGroup({
            subscribers: [],
            messages: []
        })
        if (req.body.hostId) chatGroup.subscribers.push(req.body.hostId);
        if (req.body.requesterId) chatGroup.subscribers.push(req.body.requesterId)
    }

    let newMessage = new Message({
        text: `Hi my name is ${req.body.requesterName} and I want to ${req.body.activityName} with you!`,
        author: req.body.requesterId,
        chatGroup: chatGroup.id
    })
        
    newMessage.save().then(message => {
        chatGroup.messages.push(message.id);
        chatGroup.save().then(chatGroup => {
            ChatGroup.findById(chatGroup.id)
            .populate("messages")
            .populate("subscribers")
            .then(populatedChatGroup => res.json(populatedChatGroup))})
        
    })
        
});

//update a chatGroup
router.post("/:id", (req, res) => {
    ChatGroup.findById(req.params.id)
        .then(chatGroup => {
            if (!chatGroup) {
                return res.status(404).json({ nochatgroupfound: "No chat group found with that ID" })
            } else {
                if (req.body.newSubsriberId) chatGroup.subscribers.push(req.body.newSubsriberId);
                chatGroup.save().then(updatedChatGroup => {
                    ChatGroup.findById(updateChatGroup.id)
                    .populate("messages")
                    .populate("subscribers")
                    .then(populatedChatGroup => res.json(populatedChatGroup))
                });
            }
        })
})

// user who wants the conversation 'deleted' and chatgroup id
router.post(`/delete`, (req, res) => {
    User.findById(req.body.userId)
        .then(async (user) => {
            if (!user) {
                return res.status(404).json({ nouserfound: "No user found with that ID" })
            } else {
                user.chatSubscriptions = _.filter(user.chatSubscriptions, obj => !(_.isEqual(obj.chat, req.body.chatGroupId)))
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
                        .then(populatedUser => res.json(JSON.parse(userShow(populatedUser))))})}})})

module.exports = router;