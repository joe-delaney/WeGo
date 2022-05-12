import React from "react";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

export default class UploadPhotoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      file: {}
    };

    this.handleFiles = this.handleFiles.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.uploadPhoto = this.uploadPhoto.bind(this);
  }

  handleFiles(e){
    e.preventDefault();
    this.setState({file: e.currentTarget.files[0]});
  }

  handleSubmit() {
    // e.preventDefault();
    let formData = new FormData();
    formData.append('id', this.props.currentUserId);
    formData.append('image', this.state.file);
    this.props.upload(formData);
  }

  async uploadPhoto(e) {
    await this.handleFiles(e)
    this.handleSubmit()
  }

  render() {
    return (
      <div className="upload__photo"> 
        <label htmlFor="file-input" className="upload-photo-icon">
          <AddPhotoAlternateIcon sx={{ fontSize: 35, color: '#1767b6' }} /> 
        </label>

        <input id="file-input" type="file" onChange={this.uploadPhoto} className="addphoto" accept="image/*" />
      </div>
    )
  }
}