import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import ShowActivity from "./show_activity"

const mapStateToProps = (state, ownProps) => ({
    activity: state.ui.modalInfo ? state.entities.activities[state.ui.modalInfo] : null
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

const ShowActivityContainer = connect(mapStateToProps, mapDispatchToProps)(ShowActivity);
export default ShowActivityContainer;