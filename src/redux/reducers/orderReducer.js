import { ORDER, DONE } from '../types/orderTypes'

const initialState =
    false
;

const  orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ORDER:
            return true
        
        case DONE:
            return false

        default:
            return state;
    }
}

export default orderReducer;