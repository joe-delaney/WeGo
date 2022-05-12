const express = require("express");
const router = express.Router();
const Message = require('../../models/Message');
const ChatGroup = require('../../models/ChatGroup');

//create a new message
router.post("/", (req, res) => { 
    const newMessage = new Message({
        text: req.body.text,
        author: req.body.author,
        chatGroup: req.body.chatGroup
    })
    newMessage.save().then(message => res.json(message));
})

//update a message
router.post("/:id", (req, res) => {
    Message.findById(req.params.id)
        .then(message => {
            if (!message) {
                return res.status(404).json({ nomessagefound: "No message found with that ID" })
            } else {
                if(req.body.text) message.text = req.body.text;
                message.save().then(message => res.json(message));
            }
        })
})