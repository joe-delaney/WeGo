import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import {openModal} from "../../actions/modal_actions"
import {fetchUser} from'../../actions/user_actions';
import NavBar from './navbar';

const mapStateToProps = (state) => {
    return {
        loggedIn: state.session.isAuthenticated,
        currentUser: state.session.user ? state.session.user.id : null,
        user: state.session.user ? state.entities.users[state.session.user.id] : null,
    };
};

const mapDispatchToProps = dispatch => ({
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    logout: () => dispatch(logout()),
    openModal: (modal) => dispatch(openModal(modal))
});

const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar);
export default NavBarContainer;
  