import { combineReducers } from 'redux';
// import userReducer from './userReducer';
import movieReducer from './movieReducer';

const rootReducer = combineReducers({
    // userReducer,
    movieReducer
});

export default rootReducer;