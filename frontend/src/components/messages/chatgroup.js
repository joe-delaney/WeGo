import React from 'react';

export class Chatgroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {chatShowing: false}
    this.openModal = this.openModal.bind(this)
  }

  openModal(e){
    e.preventDefault()
    this.props.openModal(this.props.chatgroup)
  }

  render() {
    //Replace with other member in chat group
    let chatGroupImg = "/api/images/667fc4dc5c22753e3a5b1a6bdd888ee2"
    let chatGroupDisplayName = "Joe Delaney";

    //Replace with last message data from chat group
    let lastSender = "You"
    let lastMessage = "Looking forward to joining you for the activity!"
    lastMessage = lastMessage.length > 65 ? `${lastMessage.slice(0, 65)}...` : lastMessage;

    return (
      <li onClick={this.openModal} className="chat-group-list-item">
        <img className="chat-group-img" src={chatGroupImg}></img>
        <div className="chat-group-list-item-right">
          <span className="chat-group-list-item-name">{chatGroupDisplayName}</span>
          <span className="chat-group-list-item-message">{`${lastSender}: ${lastMessage}`}</span>
        </div>
      </li>
    )
  }
}