import {connect} from "react-redux";
import { reset,  updateCounterSize} from "../Action";
import CounterSizeGenerator from "../Component/CounterSizeGenerator";


const mapDispatchToProps = dispatch => ({
   updateCounterSize: (size)=> {
    dispatch(updateCounterSize(size))
   },
   reset: ()=> {
    dispatch(reset())
   }

})

const mapStateToProps = null;
const counterSizeGeneratorContainer = connect(mapStateToProps, mapDispatchToProps)(CounterSizeGenerator)

export default counterSizeGeneratorContainer
