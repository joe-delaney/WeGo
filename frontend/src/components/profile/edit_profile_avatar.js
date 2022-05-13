import React from "react";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';


export default class EditProfileAvatar extends React.Component {
    constructor(props) {
        super(props);     
        this.state = {
            files: null, 
            photoUrl: this.props.user.profilePhotoPath,
            remove: false
        }
        this.handlefiles = this.handlefiles.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.removePhoto = this.removePhoto.bind(this)
    }

    handlefiles(e) {
        const file = e.currentTarget.files[0];
        this.setState({files: e.currentTarget.files[0]})
        const fileReader = new FileReader();
    
        fileReader.onloadend = () => {
          this.setState({photoFile: file, photoUrl: fileReader.result, remove: false});
        };
    
        if (file) {
          fileReader.readAsDataURL(file);          
        }
    }

    handleSubmit(e) {
        e.preventDefault();   
        let dataForm = new FormData();
        dataForm.append('id', this.props.user.id)   
        dataForm.append('remove', this.state.remove)          
        if (this.state.files) {
            dataForm.append('image', this.state.files)
            this.props.updateProfile(dataForm);
        }
        this.props.closeModal();
    }

    removePhoto(e){
        e.preventDefault()
        this.setState({photoUrl: "/api/images/41daf94ffdccb355db7a624258d02f60", files: null, remove: true})
    }

    render(){
        return(
            <div>
                <form className="form__box">
                    <div onClick={this.props.closeModal} className="close-x">X</div> 
                    <div className="form__header">
                        <h1> Update profile picture</h1>                       
                    </div>

                    <div className="profile__file">
                         
                     
                         <label htmlFor="file-input" className="upload-photo-icon">
                            <AddPhotoAlternateIcon sx={{fontSize: 35 }} className="edit__avatar"/>
                         </label>

                         <input id="file-input" type="file" onChange={this.handlefiles} className="addphoto" accept="image/*" />

                         <DeleteForeverOutlinedIcon sx={{fontSize: 35 }} className="delete__avatar" onClick={this.removePhoto}/>
                    
                        <img src={this.state.photoUrl} className="profile__img--circle"/>
                        
                    </div>

                    <div className="form__submit avatar__edit">
                        <div class="request--join"  onClick={this.handleSubmit}>Save Changes</div>
                    </div>

                </form>
             
            </div>
        )
    }
}