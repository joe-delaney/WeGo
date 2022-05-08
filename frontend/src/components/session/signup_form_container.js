import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = state => {
    return {
        errors: state.errors.session
    };
};

const mapDispatchToProps = dispatch => {
    return {
        signup: user => dispatch(signup(user))
    }
}

const SignupFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignupForm);

export default SignupFormContainer;