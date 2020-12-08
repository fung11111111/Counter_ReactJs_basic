import {connect} from "react-redux";
import { resetSum,  updateCounterSize} from "../Action";
import CounterSizeGenerator from "../Component/CounterSizeGenerator";


const mapDispatchToProps = dispatch => ({
   updateCounterSize: (size)=> {
    dispatch(updateCounterSize(size))
   },
   resetSum: (sum)=> {
    dispatch(resetSum(sum))
   }

})

const mapStateToProps = null;
const counterSizeGeneratorContainer = connect(mapStateToProps, mapDispatchToProps)(CounterSizeGenerator)

export default counterSizeGeneratorContainer
