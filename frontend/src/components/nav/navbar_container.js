import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import {openModal} from "../../actions/modal_actions"
import NavBar from './navbar';

const mapStateToProps = state => ({
    loggedIn: state.session.isAuthenticated,
    CurrentUser: state.session.user.id
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: (modal) => dispatch(openModal(modal))
});

const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar);
export default NavBarContainer;
  