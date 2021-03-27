 import { SAVE_MOVIE } from '../types/movieTypes'

const initialState = {
    
};

const  movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_MOVIE:
            return action.payload
               
        default:
            return state;
    }
}

export default movieReducer;