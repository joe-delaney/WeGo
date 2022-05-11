import React from "react";

export default class UploadPhotoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      file: {}
    };

    this.handleFiles = this.handleFiles.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFiles(e){
    e.preventDefault();
    this.setState({file: e.currentTarget.files[0]});
  }

  handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append('id', this.props.currentUserId);
    formData.append('image', this.state.file);
    this.props.upload(formData);
  }

  render() {
    return (
      <div className="form__box">

        <div className="form__header">
          <h1>Upload a photo</h1>
        </div>

        <div className="form__group">
          
          <div className="input-group">
            <input type="file" name="image" onChange={this.handleFiles} accept="image/*"/>
          </div>

          <div className="form__submit upload_photos_form">
            <button className="btn btn--secondary" onClick={this.handleSubmit}>Submit</button>
          </div>

        </div>

      </div>
    )
  }
}