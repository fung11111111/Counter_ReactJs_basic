import React, { Component } from 'react';
import CounterGroupSumContainer from '../Container/CounterGroupSumContainer';
import CounterSizeGeneratorContainer from '../Container/CounterSizeGeneratorContainer';
import CounterGroupContainer from '../Container/CounterGroupContainer';

export default class MultiCounter extends Component {

    generateSize = (generatedsize) => {
        this.setState({ size: generatedsize });
    }

    updateSum = (calculatedSum) => {
        this.setState({ sum: calculatedSum });
    }

    render() {
        return (
            <div>
                <CounterSizeGeneratorContainer />
                <CounterGroupSumContainer />
                <CounterGroupContainer updateSum={this.updateSum} sum={this.props.sum}/>
            </div>
        );
    }
}