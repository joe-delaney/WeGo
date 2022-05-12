import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import ShowActivity from "./show_activity";
import {fetchUser} from "../../actions/user_actions";
import { updateActivity } from "../../actions/activity_actions";
import { updateUser } from "../../actions/user_actions";
import { createChatGroup } from "../../actions/chat_group_actions";

const mapStateToProps = (state) => {
    let activity = state.ui.modalInfo ? state.entities.activities[state.ui.modalInfo] : null;

    return {
        activity: activity,
        host: activity ? activity.host : null,
        currentUserId: state.session.user ? state.session.user.id : undefined,
        currentUser: state.session.user ? state.entities.users[state.session.user.id] : undefined,
        requestedAttendees: activity ? activity.requestedAttendees : [],
        deniedAttendees: activity ? activity.deniedAttendees : [],
        approvedAttendees: activity ? activity.approvedAttendees : []
    }
};

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    fetchUser: (id) => dispatch(fetchUser(id)),
    updateActivity: (activity) => dispatch(updateActivity(activity)),
    updateUser: (user) => dispatch(updateUser(user)),
    createChatGroup: (info) => dispatch(createChatGroup(info))
});

const ShowActivityContainer = connect(mapStateToProps, mapDispatchToProps)(ShowActivity);
export default ShowActivityContainer;