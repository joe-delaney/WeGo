import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import ShowActivity from "./show_activity";
import {fetchUser} from "../../actions/user_actions";
import { updateActivity } from "../../actions/activity_actions";

const mapStateToProps = (state) => {
    let activity = state.ui.modalInfo ? state.entities.activities[state.ui.modalInfo] : null;
    let host = activity ? state.entities.users[activity.host] : null;

    return {
        activity: activity,
        host: host,
        currentUserId: state.session.user ? state.session.user.id : undefined,
        requestedAttendees: activity ? activity.requestedAttendees : [],
        user: (userId) => state.entities.users[userId]
    }
};

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    fetchUser: (id) => dispatch(fetchUser(id)),
    updateActivity: (activity) => dispatch(updateActivity(activity))
});

const ShowActivityContainer = connect(mapStateToProps, mapDispatchToProps)(ShowActivity);
export default ShowActivityContainer;