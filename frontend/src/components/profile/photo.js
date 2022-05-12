import React from 'react';
import './profile_photos.css';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';

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
    let deleteImageButton = (this.props.user.id === this.props.currentUserId) ? (
    <RemoveCircleRoundedIcon onClick={this.handleSubmit} sx={{ fontSize: 28, color: '#efeeee' }} className='delete__photo' />
    ) : null

    return (      
      <div onClick={() => this.props.openModal("showPhoto", this.props.photo)} className='photo_render'>
        {/* {(this.props.user.id === this.props.currentUserId) ? <button className="btn btn--secondary" onClick={this.handleSubmit}>X</button> : null } */}
        {deleteImageButton}
        <img src={this.props.photo} className="profile__photo--img" />
      </div>
    )
  }
}