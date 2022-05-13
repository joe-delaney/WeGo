import React from 'react';

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
    return (
      <div>
        <button onClick={this.emitMessage}>Send Message</button>
        <button onClick={this.closeModal}>X</button>
      </div>
    )
  }
}