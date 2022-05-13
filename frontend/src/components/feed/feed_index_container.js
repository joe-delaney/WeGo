import { connect } from "react-redux";
import { fetchActivities } from "../../actions/activity_actions";
import { openModal } from "../../actions/modal_actions";
import FeedIndex from "./feed_index";
import {withRouter} from "react-router-dom";
import { createChatGroup } from "../../actions/chat_group_actions";
import { updateActivity } from "../../actions/activity_actions";

const mapStateToProps = (state, ownProps) => ({
    activities: Object.values(state.entities.activities),
    loggedIn: state.session.isAuthenticated,
    history: ownProps.history,
    currentUserId: state.session.user ? state.session.user.id : undefined,
    currentUser: state.session.user ? state.entities.users[state.session.user.id] : undefined,
})

const mapDispatchToProps = dispatch => ({
    fetchActivities: (query) => dispatch(fetchActivities(query)),
    openModal: (modal, activityId) => dispatch(openModal(modal, activityId)),
    updateActivity: (activity) => dispatch(updateActivity(activity)),
    createChatGroup: (info) => dispatch(createChatGroup(info))
})

const FeedIndexContainer = connect(mapStateToProps, mapDispatchToProps)(FeedIndex);
export default withRouter(FeedIndexContainer);