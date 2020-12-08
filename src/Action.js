import {INCREASE, DECREASE, RESETSUM, UPDATE_COUNTER_SIZE} from './ActionTypes'


export const increaseSum = () => {
    return {type: INCREASE};
}

export const decreaseSum = () => {
    return {type: DECREASE};
}

export const resetSum = ()=> {
    return {type: RESETSUM};
}

export const updateCounterSize = (size) => {
    return {type: UPDATE_COUNTER_SIZE, payload: size};
}
