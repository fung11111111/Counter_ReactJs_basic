import { INCREASE, DECREASE, RESET, UPDATE_COUNTER_SIZE} from "./ActionTypes";
import {combineReducers} from 'redux';
const sum = (state = 0, action) => {
    if(action.type === INCREASE ) {
        return state + 1;
    }

    if(action.type === DECREASE)
    {
        return state -1;
    }

    if(action.type === RESET){
        return 0; 
    }
    return state;
}

const size = (state = 0, action) => {
    if(action.type === UPDATE_COUNTER_SIZE){
        return action.payload; 
    } 
    return state;
}



export default combineReducers ({sum, size});