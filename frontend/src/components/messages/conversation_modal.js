import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import MessageItem from "./message";



// this.props.chatgroup

export class ConversationModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: ""}
    this.closeModal = this.closeModal.bind(this)
    this.emitMessage = this.emitMessage.bind(this)
    this.updateText = this.updateText.bind(this)
  }

  closeModal(e){
    e.preventDefault()
    this.props.closeModal(null)
  }

  componentDidMount(){
    if (this.props.read === false) {this.props.readMessage({
      userId: this.props.currentUserId,
      chatGroupId: this.props._id
    })}
  }

  updateText(e){
    e.preventDefault()
    this.setState({text: e.target.value})
  }

  async emitMessage(e){
    let lastMessageObj = this.props.messages[this.props.messages.length - 1]
    let chatgroup = lastMessageObj.chatGroup
    let chatGroupObj = this.props.user.chatGroups.find( group => group._id === chatgroup)
    // debugger
    let other = chatGroupObj.subscribers.find( subscriber => subscriber._id !== this.props.currentUserId)._id
    e.preventDefault()
    await this.props.createMessage({
      senderId: this.props.currentUserId,
      chatGroupId: this.props._id,
      text: this.state.text
    })
    this.setState({text: ''})
    this.props.emitMessage([other])
  }

  render() {
    // debugger
    let lastMessageObj = this.props.messages[this.props.messages.length - 1]

    let chatgroup = lastMessageObj.chatGroup
    let chatGroupObj = this.props.user.chatGroups.find( group => group._id === chatgroup)

    let other = chatGroupObj.subscribers.find( subscriber => subscriber._id !== this.props.currentUserId)

    let chatGroupImg = other.profilePhotoPath
    let chatGroupDisplayName = `${other.fname} ${other.lname}`

    return (
      <div className='chat-container'>
        <div className="chat-header">
          <div className='chat-header-left'>
              <img src={chatGroupImg} className='conversations-container-img'></img>
              <strong className='conversations-container-nav-header'>{chatGroupDisplayName}</strong>
          </div>
          <div className='chat-header-right'>
            <CloseIcon className="close-button" sx={{ fontSize: 25, color: '#000' }} onClick={this.closeModal}/>
          </div>
        </div>
        <div className='messages-container'>
            {this.props.messages.map((message, idx) => {
              return <MessageItem key={idx} message={message}/>
            })}
        </div>
        <div className='message-composer'>
          <input className="message-input" onChange={this.updateText} value={this.state.text} placeholder='Write a message...'></input>
          <SendIcon onClick={this.emitMessage} className="send-icon" sx={{ fontSize: 25, color: '#000' }}/>
        </div>  
      </div>
    )
  }
}