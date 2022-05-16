import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

export class Chatgroup extends React.Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this)
  }

  openModal(e){
    e.preventDefault()
    this.props.openModal(this.props.chatgroup)
  }

  render() {
    //Replace with other member in chat group
    if (!this.props.chatgroup.chat.messages) {return null}

    let lastMessageObj = this.props.chatgroup.chat.messages[this.props.chatgroup.chat.messages.length - 1]

    let chatgroup = lastMessageObj.chatGroup
    let chatGroupObj = this.props.user.chatGroups.find( group => group._id === chatgroup)

    let other = chatGroupObj.subscribers.find( subscriber => subscriber._id !== this.props.currentUserId)

    let chatGroupImg = other.profilePhotoPath
    let chatGroupDisplayName = `${other.fname} ${other.lname}`

    //Replace with last message data from chat group
    let lastSender = `${lastMessageObj.author.fname} ${lastMessageObj.author.lname}`
    if (lastSender !== chatGroupDisplayName) {lastSender = 'You'}
    let lastMessage = lastMessageObj.text
    lastMessage = lastMessage.length > 60 ? `${lastMessage.slice(0, 60)}...` : lastMessage;

    //Use close icon button for hiding group chats

    return (
      <li className="chat-group-list-item">
        <img onClick={this.openModal} className="chat-group-img" src={chatGroupImg}></img>
        <div onClick={this.openModal} className="chat-group-list-item-right">
          <span className="chat-group-list-item-name">`${chatGroupDisplayName} ${this.props.chatgroup.read ? "" : '[Unread]'}`</span>
          <span className="chat-group-list-item-message">{`${lastSender}: ${lastMessage}`}</span>
        </div>
        <div className='hide-chat-group-button-container'>
          <CloseIcon className="hide-chat-group-button"/>
        </div>
      </li>
    )
  }
}