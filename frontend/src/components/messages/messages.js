import React from 'react';
import { ChatgroupContainer } from './chatgroup_container';
import { ConversationModalContainer } from './conversation_modal_container';
import "./message.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {chatShowing: false, conversationModal: null}
    this.conversationToggle = this.conversationToggle.bind(this)
    this.openConversationModal = this.openOrCloseConversationModal.bind(this)
  }

  conversationToggle(e){
    e.preventDefault()
    this.setState({chatShowing: !this.state.chatShowing})
  }

  openOrCloseConversationModal(message){
    this.setState({conversationModal: message})
  }

  render() {
    return (
      (!this.props.user) ? null :
      <div className='messages-modal-container'>
        <div className='conversations-container'>
          <div className="conversations-container-nav">
              <div className='conversations-container-nav-left'>
                <img src={this.props.user.profilePhotoPath} className='conversations-container-img'></img>
                <strong className='conversations-container-nav-header'>Messages</strong>
              </div>
              <div className='conversations-container-nav-left'>
                <KeyboardArrowDownIcon sx={{ fontSize: 25, color: '#000' }}/>
              </div>
          </div>
          <h1 className='messenger header'> Messages <span>Stand in for unread messages symbol</span> </h1>
          <button onClick={this.conversationToggle} />
          <div className='sub-conversation-container'>
            {this.props.user.chatGroups ? this.props.user.chatGroups.map( chatgroup => <ChatgroupContainer openModal={this.openOrCloseConversationModal} chatgroup={chatgroup} />) : null}
          </div>
        </div>

        {this.state.conversationModal ? <ConversationModalContainer closeModal={this.openOrCloseConversationModal} conversation={this.state.conversationModal}/> : null }
      </div>
    )
  }
}