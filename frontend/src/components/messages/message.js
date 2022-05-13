import React from "react";

export default class Message extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        //replace with message info
        let messageImg = "/api/images/667fc4dc5c22753e3a5b1a6bdd888ee2"
        let messageAuthor = "Joe Delaney";
        let messageText = "These messages look pretty good!"

        return (
            <li className="message-list-item">
                <img className="message-img" src={messageImg}></img>
                <div className="message-list-item-right">
                    <span className="message-list-item-name">{messageAuthor}</span>
                    <span className="message-list-item-text">{messageText}</span>
                </div>
            </li>
        )
    }
}