import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import ShowActivity from "./show_activity";
import {fetchUser} from "../../actions/user_actions";
import { updateActivity } from "../../actions/activity_actions";
import { updateUser } from "../../actions/user_actions";

const mapStateToProps = (state) => {
    let activity = state.ui.modalInfo ? state.entities.activities[state.ui.modalInfo] : null;

    return {
        activity: activity,
        host: activity ? activity.host : null,
        currentUserId: state.session.user ? state.session.user.id : undefined,
        requestedAttendees: activity ? activity.requestedAttendees : [],
        deniedAttendees: activity ? activity.deniedAttendees : [],
        approvedAttendees: activity ? activity.approvedAttendees : [],
        user: (userId) => state.entities.users[userId]
    }
};

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    fetchUser: (id) => dispatch(fetchUser(id)),
    updateActivity: (activity) => dispatch(updateActivity(activity)),
    updateUser: (user) => dispatch(updateUser(user))
});

const ShowActivityContainer = connect(mapStateToProps, mapDispatchToProps)(ShowActivity);
export default ShowActivityContainer;