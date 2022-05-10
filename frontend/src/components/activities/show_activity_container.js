import { connect } from "react-redux";
import ShowActivity from "./show_activity"

const mapStateToProps = (state, ownProps) => ({
    activity: state.ui.modalInfo ? state.entities.activities[state.ui.modalInfo] : null
});

const mapDispatchToProps = dispatch => ({

});

const ShowActivityContainer = connect(mapStateToProps, mapDispatchToProps)(ShowActivity);
export default ShowActivityContainer;