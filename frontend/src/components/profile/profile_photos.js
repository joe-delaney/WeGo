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
    let noPhotos = (!photoPaths.length && this.props.user && (this.props.user.id !== this.props.currentUserId)) ? <span>No photos uploaded yet.</span> : null;
    return (  
      <div className='photo__container'>
          {(this.props.user && (this.props.user.id === this.props.currentUserId)) ? <UploadPhotoFormContainer /> : null }
        <div className='profile__photo '>
          {photoPaths.map( (photo, idx) => <PhotoContainer key={idx} user={this.props.user} photo={photo} /> )}
          {noPhotos}
        </div>
      </div>    
    )
  }
}