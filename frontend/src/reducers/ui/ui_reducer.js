import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import modalInfoReducer from './modal_info_reducer';

 const uiReducer = combineReducers({
    modal: modalReducer,
    modalInfo: modalInfoReducer
});

export default uiReducer;