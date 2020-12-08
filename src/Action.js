import {INCREASE, DECREASE, RESET, UPDATE_COUNTER_SIZE} from './ActionTypes'


export const increaseSum = () => {
    return {type: INCREASE};
}

export const decreaseSum = () => {
    return {type: DECREASE};
}

export const reset = ()=> {
    return {type: RESET};
}

export const updateCounterSize = (size) => {
    return {type: UPDATE_COUNTER_SIZE, payload: size};
}
