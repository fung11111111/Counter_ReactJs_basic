import {connect} from "react-redux";
import { increaseSum, decreaseSum } from "../Action";
import Counter from "../Component/Counter";


const mapDispatchToProps = dispatch => ({
    increase: ()=> {
        dispatch(increaseSum())
    },
    decrease: ()=> {
        dispatch(decreaseSum())
    }

})

// can null for the first one
const mapStateToProps = null;
const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter)

export default CounterContainer