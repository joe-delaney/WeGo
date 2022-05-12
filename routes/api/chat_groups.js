const express = require("express");
const router = express.Router();
const ChatGroup = require('../../models/ChatGroup');
const Message = require('../../models/Message');

//create a new chat group
router.post("/", (req, res) => {
    const newChatGroup = new ChatGroup({
        subscribers: [],
        messages: []
    })
    if (req.body.hostId) subscribers.push(req.body.hostId);
    if (req.body.requesterId) subscribers.push(req.body.requesterId);

    newChatGroup.save().then(chatGroup => {
        let newMessage = new Message({
            text: `Hi my name is ${req.body.requesterName} and I want to ${req.body.activityName} with you!`,
            author: req.body.requesterId,
            chatGroup: chatGroup.id
        })
        chatGroup.messages.push(newMessage);
        ChatGroup.findById(chatGroup.id)
        .populate("messages")
        .populate("subscribers")
        .then(populatedChatGroup => res.json(populatedChatGroup))
    });
})

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