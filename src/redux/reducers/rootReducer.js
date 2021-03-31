import { combineReducers } from 'redux';
import userReducer from './userReducer';
import movieReducer from './movieReducer';
import orderReducer from './orderReducer';

const rootReducer = combineReducers({
    userReducer,
    movieReducer,
    orderReducer
});

export default rootReducer;