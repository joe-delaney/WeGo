import React from "react";

export default class Message extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="message-list-item">
                <img className="message-img" src={this.props.message.author.profilePhotoPath}></img>
                <div className="message-list-item-right">
                    <span className="message-list-item-name">{this.props.message.author.fname} {this.props.message.author.lname}</span>
                    <span className="message-list-item-text">{this.props.message.text}</span>
                </div>
            </li>
        )
    }
}