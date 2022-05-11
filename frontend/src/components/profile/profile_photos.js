import React from 'react';
import { PhotoContainer } from './photo_container';
import { UploadPhotoFormContainer } from './upload_photo_form_container';
import './profile_photos.css';

export class ProfilePhotos extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){ 
    let photoPaths = this.props.user ? this.props.user.extraPhotoPaths : [];
    return (      
      <div className='profile__photo'>
        {(this.props.user && (this.props.user.id === this.props.currentUserId)) ? <UploadPhotoFormContainer /> : null }
        {photoPaths.map( (photo, idx) => <PhotoContainer key={idx} user={this.props.user} photo={photo} /> )}
      </div>
    )
  }
}