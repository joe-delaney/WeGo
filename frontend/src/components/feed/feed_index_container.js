import { connect } from "react-redux";
import { fetchActivities } from "../../actions/activity_actions";
import FeedIndex from "./feed_index";

const mapStateToProps = state => ({
    activities: state.entities.activities
})

const mapDispatchToProps = dispatch => ({
    fetchActivities: (query) => dispatch(fetchActivities(query))
})

const FeedIndexContainer = connect(mapStateToProps, mapDispatchToProps)(FeedIndex);
export default FeedIndexContainer;