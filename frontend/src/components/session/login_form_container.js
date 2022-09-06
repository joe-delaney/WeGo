import { connect } from 'react-redux';
import { login,resetErrors } from '../../actions/session_actions';
import LoginForm from './login_form';
import {closeModal} from '../../actions/modal_actions';

const mapStateToProps = state => {
    return {
        errors: state.errors.session,
        isAuthenticated: state.session.isAuthenticated
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login: user => dispatch(login(user)),
        closeModal: () => dispatch(closeModal()),
        resetErrors: () => dispatch(resetErrors())
    }
}

const LoginFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);

export default LoginFormContainer;