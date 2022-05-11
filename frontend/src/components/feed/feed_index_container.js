import { connect } from "react-redux";
import { fetchActivities } from "../../actions/activity_actions";
import { openModal } from "../../actions/modal_actions";
import FeedIndex from "./feed_index";

const mapStateToProps = state => ({
    activities: Object.values(state.entities.activities),
    loggedIn: state.session.isAuthenticated
})

const mapDispatchToProps = dispatch => ({
    fetchActivities: (query) => dispatch(fetchActivities(query)),
    openModal: (modal, activityId) => dispatch(openModal(modal, activityId))
})

const FeedIndexContainer = connect(mapStateToProps, mapDispatchToProps)(FeedIndex);
export default FeedIndexContainer;