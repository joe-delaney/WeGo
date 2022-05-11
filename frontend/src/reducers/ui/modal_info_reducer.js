import { OPEN_MODAL, CLOSE_MODAL } from '../../actions/modal_actions';

const modalInfoReducer = (state = null, action) => {

    switch (action.type) {
        case OPEN_MODAL:
            if (action.data) return action.data;
            return state;
        case CLOSE_MODAL:
            return null;
        default:
            return state;
    }
}

export default modalInfoReducer;