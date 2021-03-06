import { connect } from 'react-redux';
import CreateActivity from './create_activity';
import {createActivity} from "../../actions/activity_actions";
import {closeModal} from "../../actions/modal_actions";
import { updateUser } from '../../actions/user_actions';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.user.id]
})

const mapDispatchToProps = dispatch => ({
    createActivity: (activity) => dispatch(createActivity(activity)),
    closeModal: () => dispatch(closeModal()),
    updateUser: (user) => dispatch(updateUser(user))
})

const CreateActivityContainer = connect(mapStateToProps, mapDispatchToProps)(CreateActivity);
export default CreateActivityContainer;