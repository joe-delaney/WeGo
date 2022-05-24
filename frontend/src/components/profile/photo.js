import React from 'react';
import './profile_photos.css';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';

export class Photo extends React.Component {
  constructor(props) {
    super(props);
    this.openDeletePhotoModal = this.openDeletePhotoModal.bind(this);
  }

//   handleSubmit(e) {
//     e.preventDefault();
//     this.props.delete({id: this.props.currentUserId, photo: this.props.photo});
// }
openDeletePhotoModal(e) {
  e.preventDefault();
  this.props.openModal('deletePhoto', this.props.photo );
}

  render(){
    let deleteImageButton = (this.props.user.id === this.props.currentUserId) ? (
    <RemoveCircleRoundedIcon onClick={this.openDeletePhotoModal} sx={{ fontSize: 35, color: 'white' }} className='delete__photo' />
    ) : null

    return (      
      <div className='photo_render'>
        {deleteImageButton}
        <img onClick={() => this.props.openModal("showPhoto", this.props.photo)} src={this.props.photo} className="profile__photo--img" />
      </div>
    )
  }
}