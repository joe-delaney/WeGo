import React from 'react';
import { ChatgroupContainer } from './chatgroup_container';
import { ConversationModalContainer } from './conversation_modal_container';
import { socket } from '../socket';
import "./message.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export class Messages extends React.Component {
  constructor(props) {
    super(props);
    // conversationalModal is being set to true strictly for testing purposes
    this.conversationToggle = this.conversationToggle.bind(this)
    this.openOrCloseConversationModal = this.openOrCloseConversationModal.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.emitMessage = this.emitMessage.bind(this)
    this.toggleConversationsShown = this.toggleConversationsShown.bind(this)

    this.state = {
      conversationsCollapsed: true,
      chatShowing: false,
      conversationModal: true
    }
  }

  conversationToggle(e){
    e.preventDefault()
    this.setState({chatShowing: !this.state.chatShowing})
  }

  openOrCloseConversationModal(message){
    this.setState({conversationModal: message})
  }

  componentDidMount(){
    socket.emit('join', this.props.currentUserId)
    socket.on('message', () => {
      console.log(`User has received a message`)
      this.props.fetchUser(this.props.currentUserId)
    })
  }

  componentWillUnmount(){
    socket.emit('leave', this.props.currentUserId)
  }

  emitMessage(){
    console.log(`User is sending a message`)
    socket.emit('message', [this.props.currentUserId])
  }

  toggleConversationsShown() {
    this.setState({
      conversationsCollapsed: !this.state.conversationsCollapsed
    })
  }

  render() {
    let conversationsListShown = this.state.conversationsCollapsed ? "hidden" : "";
    let conversationsContainerClass  = this.state.conversationsCollapsed ? 
      "conversations-container-collapsed" : "conversations-container";

    return (
      (!this.props.user) ? null :
      <div className='messages-modal-container'>
        <div className={`${conversationsContainerClass}`}>
          <div onClick={this.toggleConversationsShown} className="conversations-container-nav">
              <div className='conversations-container-nav-left'>
                <img src={this.props.user.profilePhotoPath} className='conversations-container-img'></img>
                <strong className='conversations-container-nav-header'>Messages</strong>
                <span className='new-message-icon'> New</span>
              </div>
              <div className='conversations-container-nav-right'>
                <KeyboardArrowDownIcon sx={{ fontSize: 25, color: '#000'}}/>
              </div>
          </div>
          {/* <button onClick={this.conversationToggle} /> */}
          <div className={`conversations-list ${conversationsListShown}`}>
            {this.props.user.chatGroups ? 
              this.props.user.chatGroups.map((chatgroup, idx) => 
                <ChatgroupContainer 
                  openModal={this.openOrCloseConversationModal} 
                  chatgroup={chatgroup}
                  key={`chatgroup${idx}`} />) : null}
          </div>
        </div>

        {/* <input type="text" />
        <button onClick={this.sendMessage}>Submit</button> */}

        {this.state.conversationModal ? <ConversationModalContainer emitMessage={this.emitMessage} closeModal={this.openOrCloseConversationModal} conversation={this.state.conversationModal}/> : null }
      </div>
    )
  }
}