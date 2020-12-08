import React, { Component } from 'react';
import CounterGroup from './CounterGroup'
import CounterSizeGerator from './CounterSizeGenerator';
import CounterGroupSum from './CounterGroupSum';

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

    getValueFromCounter
    render() {
        return (
            <div>
                <CounterSizeGerator generateSize={this.generateSize} />
                <CounterGroupSum sum={this.state.sum} />
                <CounterGroup size={this.state.size} updateSum={this.updateSum} sum={this.state.sum}/>
                <span>My state size is: {this.state.size}</span>
            </div>
        );
    }
}