import React, { Component } from 'react';
import CounterGroup from './CounterGroup'
import CounterSizeGerator from './CounterSizeGenerator';
import CounterGroupSum from './CounterGroupSum';
import CounterGroupSumContainer from '../Container/CounterGroupSumContainer';
import CounterSizeGeneratorContainer from '../Container/CounterSizeGeneratorContainer';
import CounterGroupContainer from '../Container/CounterGroupContainer';

export default class MultiCounter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            size: 0,
            sum: 0
        };
    }

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
                <CounterGroupContainer updateSum={this.updateSum} sum={this.state.sum}/>
            </div>
        );
    }
}