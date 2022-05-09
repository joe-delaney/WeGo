import { combineReducers } from 'redux';
import sessionReducer from './session/session_reducer';
import errorsReducer from './errors/errors_reducer';
import uiReducer from './ui/ui_reducer';
import entitiesReducer from './entities/entities_reducer';

const RootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer, 
    errors: errorsReducer,
    ui: uiReducer
});

export default RootReducer;