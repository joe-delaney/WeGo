const express = require("express");
const router = express.Router();
const ChatGroup = require('../../models/ChatGroup');
const Message = require('../../models/Message');
const userShow = require("../../jbuilder/users");
var _ = require('lodash');
const { ObjectId } = require('mongodb')

//create a new chat group
// hostId
// requesterId
// requesterName
// activityName
router.post("/", async (req, res) => {
    console.log(req.body.requesterId)
    ChatGroup.findOne({ $and: [{subscribers: {$all: [req.body.hostId, req.body.requesterId]}}, {subscriber: {$size: 2}}]}).then(async chatGroup => {
        console.log(`chatgroup: ${chatGroup}`)
        if (chatGroup) return res.json({id: chatGroup._id})
        const newChatGroup = new ChatGroup({
            subscribers: [req.body.hostId, req.body.requesterId],
            messages: []
        })
        newChatGroup.save().then(newChatGroup => {
            console.log(newChatGroup.id)
            console.log(`newChatgroup: ${newChatGroup}`)
            return res.json({id: newChatGroup.id})
        })
    })
})

// user who wants the conversation 'deleted' and chatgroup id
// userId
// chatGroupId
router.post(`/delete`, (req, res) => {
    User.findById(req.body.userId)
        .then( (user) => {
            if (!user) {
                return res.status(404).json({ nouserfound: "No user found with that ID" })
            } else {
                // let chatSubscriptions = _.filter(user.chatSubscriptions, obj => !(_.isEqual(obj.chat, req.body.chatGroupId)))
                User.updateOne({id: req.body.userId}, {$pull: {chatSubscriptions: {chat: req.body.chatGroupId}}})
                .then(data => {
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
                        .then(populatedUser => res.json(JSON.parse(userShow(populatedUser))))})}})})

module.exports = router;