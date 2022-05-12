import { connect } from 'react-redux';
import { deletePhoto } from '../../actions/user_actions';
import { Photo } from './photo';
import {openModal} from "../../actions/modal_actions"

const mapStateToProps = (state, ownProps) => ({
  user: ownProps.user,
  currentUserId: state.session.user ? state.session.user.id : null
});

const mapDispatchToProps = dispatch => ({
  delete: photo => dispatch(deletePhoto(photo)),
  openModal: (modal, data) => dispatch(openModal(modal, data))
});

export const PhotoContainer = connect(mapStateToProps, mapDispatchToProps)(Photo);