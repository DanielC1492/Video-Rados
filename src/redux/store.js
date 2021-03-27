import { createStore, compose, applyMiddleware } from 'redux';
import { save, load } from "redux-localstorage-simple";
import rootReducer from './reducers/rootReducer';

const createStoreWithMiddleware = applyMiddleware(
    save({states: ['userReducer']}), // Saving done here
)( createStore );

const store = createStoreWithMiddleware(
    rootReducer,
    load({states: ['userReducer']}), // Loading done here
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
        trace: true,
    }) || compose
);

export default store;