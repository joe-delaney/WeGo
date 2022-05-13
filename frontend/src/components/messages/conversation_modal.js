import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';

export class ConversationModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {chatShowing: false}
    this.closeModal = this.closeModal.bind(this)
    this.emitMessage = this.emitMessage.bind(this)
  }

  closeModal(e){
    e.preventDefault()
    this.props.closeModal(null)
  }

  emitMessage(e){
    e.preventDefault()
    this.props.emitMessage()
  }

  render() {

    let chatImage = "/api/images/667fc4dc5c22753e3a5b1a6bdd888ee2"
    let chatName = "Joe Delaney"

    return (
      <div className='chat-container'>
        <div className="chat-header">
          <div className='chat-header-left'>
              <img src={chatImage} className='conversations-container-img'></img>
              <strong className='conversations-container-nav-header'>Joe Delaney</strong>
          </div>
          <div className='chat-header-right'>
            <CloseIcon className="close-button" sx={{ fontSize: 25, color: '#000' }} onClick={this.closeModal}/>
          </div>
        </div>
        <div className='messages-container'>

        </div>
        <div className='message-composer'>
          <input className="message-input" placeholder='Write a message...'></input>
          <SendIcon onClick={this.emitMessage} className="send-icon" sx={{ fontSize: 25, color: '#000' }}/>
        </div>  
      </div>
    )
  }
}