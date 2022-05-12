import React from 'react';
import { ChatgroupContainer } from './chatgroup_container';
import { ConversationModalContainer } from './conversation_modal_container';

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
      <div className='outermost_messenger_container'>

        <div className='conversations-container'>
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