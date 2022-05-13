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
    return (
      <div className='singleChatGroup' onClick={this.openModal}>
        <h1>Chat title <span>Stand in for unread messages symbol</span></h1>
      </div>
    )
  }
}