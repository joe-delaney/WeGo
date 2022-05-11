import React from 'react';
import { PhotoContainer } from './photo_container';
import { UploadPhotoFormContainer } from './upload_photo_form_container';
import './profile_photos.css';

export class ProfilePhotos extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){   
    return (      
      <div className='profile__photo'>
        {(this.props.user.id === this.props.currentUserId) ? <UploadPhotoFormContainer /> : null }
        {this.props.user.extraPhotoPaths.map( photo => <PhotoContainer user={this.props.user} photo={photo} /> )}
      </div>
    )
  }
}