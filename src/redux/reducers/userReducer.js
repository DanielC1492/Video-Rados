import { LOGIN, LOGOUT } from '../types/userTypes';
const initialState = {
    user: {},
    token: ''
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            }
        case LOGOUT:
            return initialState;
             
        default:
            return state;
    }
}

export default userReducer;