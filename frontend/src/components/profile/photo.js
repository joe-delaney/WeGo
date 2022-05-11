import React from 'react';
import './profile_photos.css';

export class Photo extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.delete({id: this.props.currentUserId, photo: this.props.photo});
}

  render(){
    return (      
      <div className='photo-container'>
        {(this.props.user.id === this.props.currentUserId) ? <button className="btn btn--secondary" onClick={this.handleSubmit}>X</button> : null }
        <img src={this.props.photo} className="profile__photo--img" />
      </div>
    )
  }
}