import React from 'react';

export class ConversationModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {chatShowing: false}
  }

  closeModal(e){
    e.preventDefault()
    this.props.closeModal(null)
  }

  render() {
    return (
      <button onClick={this.closeModal}>X</button>
    )
  }
}