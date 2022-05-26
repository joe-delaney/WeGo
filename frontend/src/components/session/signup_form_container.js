import { connect } from 'react-redux';
import { signup, login, resetErrors } from '../../actions/session_actions';
import SignupForm from './signup_form';
import {closeModal} from '../../actions/modal_actions';

const mapStateToProps = state => {
    return {
        errors: state.errors.session,
        isAuthenticated: state.session.isAuthenticated
    };
};

const mapDispatchToProps = dispatch => {
    return {
        signup: user => dispatch(signup(user)),
        closeModal: () => dispatch(closeModal()),
        login: user => dispatch(login(user)),
        resetErrors: () => dispatch(resetErrors()),
    }
}

const SignupFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignupForm);

export default SignupFormContainer;