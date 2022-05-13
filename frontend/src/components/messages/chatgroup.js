import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

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
    lastMessage = lastMessage.length > 60 ? `${lastMessage.slice(0, 60)}...` : lastMessage;

    //Use close icon button for hiding group chats

    return (
      <li className="chat-group-list-item">
        <img onClick={this.openModal} className="chat-group-img" src={chatGroupImg}></img>
        <div onClick={this.openModal} className="chat-group-list-item-right">
          <span className="chat-group-list-item-name">{chatGroupDisplayName}</span>
          <span className="chat-group-list-item-message">{`${lastSender}: ${lastMessage}`}</span>
        </div>
        <div className='hide-chat-group-button-container'>
          <CloseIcon className="hide-chat-group-button"/>
        </div>
      </li>
    )
  }
}