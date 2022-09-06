import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from "../../actions/modal_actions";
import { deletePhoto } from '../../actions/user_actions';


class DeletePhoto extends React.Component {

  componentDidMount() {
    // this.props.fetchPost(this.props.match.params.postId);
  }
  

  render() {
    const {closeModal} = this.props;
    return (
        <div>
        <form className="form__box">
            <div onClick={this.props.closeModal} className="close-x">X</div>
            <div className="form__header">
                <h1>Items you delete can't be restored.</h1>
            </div>
         
            <div className='from__submit__delete'>
                    <button 
                        className="btn  btn--gray" 
                        onClick={closeModal} > 
                        Cancel
                    </button>                         
                    <button 
                        className="btn btn--primary " 
                        onClick={() => this.props.delete({id: this.props.currentUserId, photo: this.props.photo}).then(() => {
                            this.props.closeModal()                           
                            }
                        )} 
                        > 
                        Delete
                    </button>  
            </div>
            
        </form>
        </div>
    )

  }
}

const mapStateToProps = (state, ownProps) => ({
    user: ownProps.user,
    currentUserId: state.session.user ? state.session.user.id : null
  });
  
  const mapDispatchToProps = dispatch => ({
    delete: photo => dispatch(deletePhoto(photo)),
    closeModal: () => dispatch(closeModal())
  });

export default connect(mapStateToProps, mapDispatchToProps)(DeletePhoto);